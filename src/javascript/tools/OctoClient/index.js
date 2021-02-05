import EventEmitter from 'events';
import { Octokit } from '@octokit/rest';
import mime from 'mime-types';

import dayjs from 'dayjs';
import { dateFormatReadable } from '../../app/defaults';

// Description of whole commit/upload process found here
// https://dev.to/lucis/how-to-push-files-programatically-to-a-repository-using-octokit-with-typescript-1nj0

class OctoClient extends EventEmitter {
  constructor(gitSetings = {}) {
    super();
    this.octoKit = null;
    this.busy = false;
    this.owner = null;
    this.repo = null;
    this.branch = null;
    this.token = null;
    this.progress = 0;
    this.expectedTicks = 0;
    this.setOctokit(gitSetings);
  }

  setOctokit({ use, owner, repo, branch, token }) {
    if (this.busy || !use || !owner || !repo || !branch || !token) {
      this.octoKit = null;
      this.owner = null;
      this.repo = null;
      this.branch = null;
      this.token = null;

      return;
    }

    this.owner = owner;
    this.repo = repo;
    this.branch = branch;
    this.token = token;

    this.octoKit = new Octokit({ auth: token });
  }

  progressStart(fileCount) {
    this.busy = true;
    this.emit('starting', {
      progress: 0,
      busy: this.busy,
    });
    this.expectedTicks = fileCount + 7;
    this.progressTick();
  }

  progressTick(done = false) {
    if (!this.octoKit) {
      throw new Error('not configured');
    }

    this.progress = done ? 0 : this.progress + 1;

    this.emit('progress', {
      progress: this.progress / this.expectedTicks,
      busy: !done && this.busy,
    });
  }

  getCurrentCommit() {
    // eslint-disable-next-line brace-style
    try { this.progressTick(); } catch (error) { return Promise.reject(error); }

    return this.octoKit.git.getRef({
      owner: this.owner,
      repo: this.repo,
      ref: `heads/${this.branch}`,
    })
      .then(({ data: { object: { sha: commitSha } } }) => (
        this.octoKit.git.getCommit({
          owner: this.owner,
          repo: this.repo,
          commit_sha: commitSha,
        })
          .then(({ data: commitData }) => ({
            commitSha,
            treeSha: commitData.tree.sha,
          }))
      ));
  }

  createBlobForFile(file) {
    // eslint-disable-next-line brace-style
    try { this.progressTick(); } catch (error) { return Promise.reject(error); }

    return new Promise(((resolve) => {
      const reader = new FileReader();
      reader.onloadend = ({ target }) => {
        resolve(target.result);
      };

      reader.readAsDataURL(file.imageFile);
    }))
      .then((content) => {
        const rawContentStart = content.indexOf(';base64,') + 8;
        const rawContent = content.substr(rawContentStart);
        const extension = mime.extension(file.imageFile.type);

        return this.octoKit.git.createBlob({
          owner: this.owner,
          repo: this.repo,
          content: rawContent,
          encoding: 'base64',
        })
          .then(({ data: blobData }) => ({
            filename: `${file.hash}.${extension}`,
            blobData,
          }));
      });
  }

  createNewTree(filesData, parentTreeSha) {
    // eslint-disable-next-line brace-style
    try { this.progressTick(); } catch (error) { return Promise.reject(error); }

    const tree = filesData.map(({ filename, blobData: { sha } }) => ({
      path: filename,
      mode: '100644',
      type: 'blob',
      sha,
    }));

    return this.octoKit.git.createTree({
      owner: this.owner,
      repo: this.repo,
      tree,
      base_tree: parentTreeSha,
    })
      .then(({ data }) => data);
  }

  createNewCommit(message, currentTreeSha, currentCommitSha) {
    // eslint-disable-next-line brace-style
    try { this.progressTick(); } catch (error) { return Promise.reject(error); }

    return this.octoKit.git.createCommit({
      owner: this.owner,
      repo: this.repo,
      message,
      tree: currentTreeSha,
      parents: [currentCommitSha],
    })
      .then(({ data }) => data);
  }

  setBranchToCommit(commitSha) {
    // eslint-disable-next-line brace-style
    try { this.progressTick(); } catch (error) { return Promise.reject(error); }

    return this.octoKit.git.updateRef({
      owner: this.owner,
      repo: this.repo,
      ref: `heads/${this.branch}`,
      sha: commitSha,
    })
      .then(({ data }) => data);
  }

  uploadToRepo(files) {
    // eslint-disable-next-line brace-style
    try { this.progressTick(); } catch (error) { return Promise.reject(error); }

    const commitMessage = `Sync. ${dayjs()
      .format(dateFormatReadable)}`;

    return this.getCurrentCommit()
      .then(({ treeSha, commitSha }) => (
        Promise.all(files.map((file) => (
          this.createBlobForFile(file)
        )))
          .then((filesData) => (
            this.createNewTree(filesData, treeSha)
          ))
          .then(({ sha }) => (
            this.createNewCommit(commitMessage, sha, commitSha)
          ))
          .then(({ sha }) => (
            this.setBranchToCommit(sha)
          ))
      ));
  }

  updateRemoteStore({ images }) {
    if (this.busy) {
      return Promise.reject(Error('currently busy'));
    }

    this.progressStart(images.length);
    return this.uploadToRepo(images)
      .then((result) => {
        this.progressTick(true);
        this.busy = false;
        return result;
      })
      .catch((error) => {
        this.busy = false;
        this.emit('error', error);
        throw error;
      });
  }
}

export default OctoClient;
