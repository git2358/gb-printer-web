const importMessage = (store) => {

  let heartbeatTimer = null;

  window.addEventListener('message', (event) => {
    const { printerUrl } = store.getState();
    let origin;

    try {
      origin = new URL(printerUrl).origin;
    } catch (error) {
      origin = new URL(window.location.href).origin;
    }

    if (event.origin !== origin) {
      return;
    }

    const { remotePrinter: { lines, blob, height } = {} } = event.data;

    if (height) {
      if (!heartbeatTimer || store.getState().printerHeartbeat !== height) {
        store.dispatch({
          type: 'HEARTBEAT_RECEIVED',
          payload: height,
        });
      }

      window.clearTimeout(heartbeatTimer);
      heartbeatTimer = window.setTimeout(() => {
        heartbeatTimer = null;
        store.dispatch({
          type: 'HEARTBEAT_TIMED_OUT',
        });
      }, 1500);
    }

    if (lines) {
      let file;
      try {
        file = new File([...lines.join('\n')], 'Text input.txt', { type: 'text/plain' });
      } catch (error) {
        file = new Blob([...lines.join('\n')], { type: 'text/plain' });
      }

      store.dispatch({
        type: 'IMPORT_FILE',
        payload: { files: [file] },
      });
    }

    if (blob) {
      store.dispatch({
        type: 'IMPORT_FILE',
        payload: { files: [blob] },
      });
    }

  });


  return (next) => (action) => {

    next(action);
  };
};

export default importMessage;
