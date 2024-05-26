import { Actions } from '../actions';
import { NamedFile, PrinterParams, RemotePrinterEvent } from '../../../../types/Printer';
import { MiddlewareWithState } from '../../../../types/MiddlewareWithState';
import { ConfirmAskAction } from '../../../../types/actions/ConfirmActions';
import { ImportFilesAction } from '../../../../types/actions/ImportActions';

const importMessage: MiddlewareWithState = (store) => {

  let heartbeatTimer: number | null;
  let remotePrinterWindow: Window | null;

  window.addEventListener('message', (event: MessageEvent<RemotePrinterEvent>) => {
    const { printerUrl } = store.getState();
    let origin: string;

    try {
      origin = new URL(printerUrl).origin;
    } catch (error) {
      origin = new URL(window.location.href).origin;
    }

    if (event.origin !== origin) {
      return;
    }

    const { fromRemotePrinter: {
      lines,
      progress,
      blob,
      blobsdone,
      commands,
      printerData,
    } = {} } = event.data;
    const sourceWindow = event.source as Window;

    if (commands) {
      if (
        !heartbeatTimer ||
        JSON.stringify(commands) !== JSON.stringify(store.getState().printerFunctions)) {
        store.dispatch({
          type: Actions.PRINTER_FUNCTIONS_RECEIVED,
          payload: commands,
        });
      }

      remotePrinterWindow = sourceWindow;

      window.clearTimeout(heartbeatTimer as number);
      heartbeatTimer = window.setTimeout(() => {
        heartbeatTimer = null;
        remotePrinterWindow = null;
        store.dispatch({
          type: Actions.HEARTBEAT_TIMED_OUT,
        });
      }, 1500);
    }

    if (lines) {
      let file: File | Blob;
      try {
        file = new File([lines.join('\n')], 'Text input.txt', { type: 'text/plain' });
      } catch (error) {
        file = new Blob([lines.join('\n')], { type: 'text/plain' });
      }

      store.dispatch<ImportFilesAction>({
        type: Actions.IMPORT_FILES,
        payload: { files: [file] },
      });
    }

    if (progress !== undefined) {
      store.dispatch({
        type: Actions.PRINTER_PROGRESS,
        payload: progress,
      });
    }

    // fallback for printers with web-app version < 1.15.5 to display some "fake" progress..
    if (blob) {
      store.dispatch<ImportFilesAction>({
        type: Actions.IMPORT_FILES,
        payload: { files: [blob] },
      });
    }

    if (blobsdone) {
      if (typeof blobsdone[0] === 'string') {
        window.setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert('You should update the web-app to a version > 1.16.0 on your printer for an optimized import experience :-)');
        }, 200);
        return;
      }

      const files = blobsdone.filter((response): boolean => Boolean(response.blob && response.ok));

      const namedFiles = files.map((file, index): NamedFile => {
        const indexText = files.length > 1 ? (index + 1).toString(10).padStart(2, '0') : '';
        return ({
          ...file,
          blobName: `Printer ${indexText}`.trim(),
        });
      });


      if (namedFiles.length) {
        store.dispatch<ImportFilesAction>({
          type: Actions.IMPORT_FILES,
          payload: {
            files: namedFiles,
            fromPrinter: true,
          },
        });
      } else {
        store.dispatch({
          type: Actions.CONFIRM_ASK,
          payload: {
            message: 'No valid files received from WiFi-Printer',
            confirm: () => {
              store.dispatch({
                type: Actions.CONFIRM_ANSWERED,
              });
              store.dispatch({
                type: Actions.PRINTER_RESET,
              });
            },
          },
        } as ConfirmAskAction);
      }
    }

    if (printerData) {
      store.dispatch({
        type: Actions.PRINTER_DATA_RECEIVED,
        payload: printerData,
      });
    }

  });


  return (next) => async (action) => {

    switch (action.type) {
      case Actions.REMOTE_CALL_FUNCTION: {
        const state = store.getState();
        const params: PrinterParams | undefined = (action.payload === 'fetchImages') ?
          { dumps: state.printerData?.dumps } : undefined;

        // obh and pako need to be loaded here, as the trigger from the
        // remote window might cause the files not to be loaded correctly
        await import(/* webpackChunkName: "obh" */ 'object-hash');
        await import(/* webpackChunkName: "pko" */ 'pako');

        if (!remotePrinterWindow) {
          throw new Error('remote printer window object is missing');
        }

        remotePrinterWindow.postMessage({
          toRemotePrinter: {
            command: action.payload,
            params,
          },
        } as RemotePrinterEvent, '*');

        break;
      }

      default:
        break;
    }

    next(action);
  };
};

export default importMessage;
