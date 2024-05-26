import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../../store/actions';
import { State } from '../../../store/State';
import { FramesMessageAction } from '../../../store/reducers/framesMessageReducer';

interface UseFrameInfo {
  message?: {
    dismissType: string,
    headline: string,
    text: string[],
  }
  dismiss: (type: string) => void,
}

export const useFrameInfo = (): UseFrameInfo => {
  const framesMessage = useSelector((state: State) => state.framesMessage);
  const dispatch = useDispatch();

  const message = framesMessage === 1 ? {
    dismissType: Actions.FRAMES_MESSAGE_HIDE,
    headline: 'You might be temporarily missing some frames',
    text: [
      'In a recent change the pre-compiled frames have been removed from this application.',
      'The application now however gives you the opportunity to add all frames you like by yourself and also share them with others.',
      'Maybe you have designed some frames by yourself, or you have aquired some previously unknown frames.',
      'To see how you can add the frames, check the "Frames" explanation on the startpage of this app.',
    ],
  } : undefined;

  return {
    message,
    dismiss: (type: string) => {
      dispatch({
        type,
      } as FramesMessageAction);
    },
  };
};
