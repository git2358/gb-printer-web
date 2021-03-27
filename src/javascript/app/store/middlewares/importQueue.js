import Queue from 'promise-queue';
import saveNewImage from '../../../tools/saveNewImage';
import uniqueBy from '../../../tools/unique/by';

const importQueue = (store) => {

  const uniqueHash = uniqueBy('hash');
  const queue = new Queue(1, Infinity);

  const addToQueue = (images) => {

    Promise.all(images.map((image) => (
      queue.add(() => (
        saveNewImage({
          lines: image.lines,
          filename: image.file,
          palette: store.getState().activePalette,
          dispatch: store.dispatch,
        })
      ))
    )))
      .then((result) => {

        const uniqueResult = uniqueHash(result);
        const duplicatesMsg = uniqueResult.length === result.length ? '' :
          ` (${result.length - uniqueResult.length} duplicates found in import)`;

        const message = uniqueResult.length ?
          `Import ${uniqueResult.length} images?` :
          'This import contains no images';

        store.dispatch({
          type: 'CONFIRM_ASK',
          payload: {
            message: `${message}${duplicatesMsg}`,
            confirm: () => {
              store.dispatch({
                type: 'ADD_IMAGES',
                payload: uniqueResult,
              });
            },
            deny: () => {
              store.dispatch({
                type: 'CONFIRM_ANSWERED',
              });
            },
          },
        });
      });
  };

  return (next) => (action) => {

    if (action.type === 'ADD_TO_QUEUE') {
      addToQueue(action.payload);
      return;
    }

    next(action);
  };
};

export default importQueue;
