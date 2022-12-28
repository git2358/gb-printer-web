import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lightbox from '../../Lightbox';
import { IMPORTQUEUE_CANCEL } from '../../../store/actions';
import './index.scss';

const ImportQueue = () => {
  const importQueue = useSelector((store) => store.importQueue);
  // const palette = useSelector((state) => state.palettes.find(({ shortName }) => shortName === state.activePalette));
  const dispatch = useDispatch();
  // const [dither, setDither] = useState(true);
  // const [contrast, setContrast] = useState('wide'); // 'wide' covers the complete greyscale range from 00 tro FF. The thresholds are optimal for already dithered imports

  return (
    <Lightbox
      className="import-overlay"
      header="Image Import"
      confirm={() => {}}
      deny={() => {
        dispatch({ type: IMPORTQUEUE_CANCEL });
      }}
    >
      <div
        className="import-overlay__content"
      >
        {
          importQueue.map((image, index) => (
            <code
              key={index}
              className="import-overlay__code"
            >
              { index }
              .
              { image.fileName }
            </code>
          ))
        }
      </div>
    </Lightbox>
  );
};

export default ImportQueue;
