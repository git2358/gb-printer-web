import React from 'react';
import PropTypes from 'prop-types';

const GalleryIntroText = (props) => (
  <>
    <h1 className="app__content-headline">
      Gallery
      <span className="app__counter">
        { props.selectedCount ? `(${props.selectedCount} of ${props.imageCount} images selected)` : `(${props.imageCount} images)` }
      </span>
    </h1>
    <p className="app__content-hint">
      These images are stored in the localStorage of your browser.
      That&apos;s why you (currently) cannot share a link to one of them.
      <br />
      Also if you clear your browser&apos;s cookies, the images will be gone too.
    </p>
  </>
);

GalleryIntroText.propTypes = {
  imageCount: PropTypes.number.isRequired,
  selectedCount: PropTypes.number.isRequired,
};

export default GalleryIntroText;
