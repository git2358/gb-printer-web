import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Actions } from '../../store/actions';
import applyFrame from '../../../tools/applyFrame';
import textToTiles from '../../../tools/textToTiles';

const getTiles = ({ frameId, frameHash, name }) => {
  const text = `\n  frameId: ${frameId}\n\n  ${name}\n\n${frameHash}`;
  return applyFrame(textToTiles(text), frameHash);
};

const useFrame = ({ frameId, name }) => {
  const dispatch = useDispatch();
  const [tiles, setTiles] = useState(null);
  const frameHash = useSelector(({ frames }) => frames.find(({ id }) => id === frameId))?.hash;
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    getTiles({
      frameId,
      frameHash,
      name,
    })
      .then((newTiles) => {
        if (mounted.current) {
          setTiles(newTiles);
        }
      });
  }, [frameId, frameHash, name]);

  const deleteFrame = () => {
    mounted.current = false;

    dispatch({
      type: Actions.CONFIRM_ASK,
      payload: {
        message: `Delete frame "${name}" (${frameId})?`,
        confirm: () => {
          dispatch({
            type: Actions.DELETE_FRAME,
            payload: frameId,
          });
        },
        deny: () => {
          dispatch({
            type: Actions.CONFIRM_ANSWERED,
          });
        },
      },
    });
  };

  const editFrame = () => {
    dispatch({
      type: Actions.EDIT_FRAME,
      payload: frameId,
    });
  };

  return {
    tiles,
    setTiles,
    frameHash,
    deleteFrame,
    editFrame,
  };
};

export default useFrame;
