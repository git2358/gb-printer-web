import { connect } from 'react-redux';
import getRGBNFrames from '../../../../tools/getRGBNFrames';
import getFilteredImages from '../../../../tools/getFilteredImages';
import { Actions } from '../../../store/actions';

const mapStateToProps = (state) => {
  const images = getFilteredImages(state);
  const image = images.find((_, lightboxIndex) => lightboxIndex === state.lightboxImage);
  let palette;
  let frames;

  if (!image) {
    return {
      isFullscreen: false,
      lockFrame: false,
      invertPalette: false,
      lightboxIndex: 0,
      size: 0,
    };
  }

  if (image.hashes) {
    palette = image.palette;
    frames = getRGBNFrames(state, image.hashes, image.frame);
  } else {
    palette = state.palettes.find(({ shortName }) => shortName === image.palette);
    frames = null;
  }

  return ({
    hash: image.hash,
    title: image.title,
    created: image.created,
    hashes: image.hashes,
    frame: image.frame,
    isFullscreen: state.isFullscreen,
    palette,
    frames,
    lightboxIndex: state.lightboxImage,
    size: images.length || 0,
    lockFrame: image.lockFrame || false,
    invertPalette: image.invertPalette || false,
    preferredLocale: state.preferredLocale,
    rotation: image.rotation || null,
  });
};

const mapDispatchToProps = (dispatch) => ({
  close: () => {
    dispatch({
      type: Actions.SET_LIGHTBOX_IMAGE_INDEX,
      payload: null,
    });
  },
  prev: () => {
    dispatch({
      type: Actions.LIGHTBOX_PREV,
    });
  },
  next: () => {
    dispatch({
      type: Actions.LIGHTBOX_NEXT,
    });
  },
  fullscreen: () => {
    dispatch({
      type: Actions.LIGHTBOX_FULLSCREEN,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
