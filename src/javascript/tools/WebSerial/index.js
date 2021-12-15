import EventEmitter from 'events';
import SerialPort from './SerialPort';

class WebSerial extends EventEmitter {
  constructor() {
    super();
    this.enabled = !!navigator.serial && !!window.TextDecoderStream;
    this.activePorts = [];
    this.baudRate = 115200;
    this.port = null;
    // instantly connect to known existing ports
    this.watchPorts();
  }

  // lists existing/known ports
  getPorts() {
    if (!this.enabled) {
      return Promise.resolve([]);
    }

    return navigator.serial.getPorts()
      .then((devices) => (
        devices
          .filter(({ readable }) => !readable) // opened devices have a ReadableStream as device.readable
          .map((device) => (
            new SerialPort({
              device,
              baudRate: this.baudRate,
            })
          ))
      ));
  }

  getActivePorts() {
    return this.activePorts;
  }

  watchPorts() {
    window.setInterval(() => {
      this.getPorts()
        .then((ports) => {
          ports
            .forEach((port) => {
              port.addListener('error', (error) => {
                console.warn(error);
                this.activePorts = this.activePorts
                  .filter((activePort) => (
                    activePort !== port
                  ));
                this.emit('activePortsChange', [...this.activePorts]);
              });

              port.addListener('data', (data) => {
                this.emit('data', data);
              });

              port.connect()
                .then(() => {
                  // document.addEventListener('click', () => {
                  //
                  //   // if (window.toggl) {
                  //   //   window.toggl = false;
                  //   //   port.send('\u00A2\u00A4')
                  //   //     .then(() => {
                  //   //       console.log('SET_MODE_AGB / SET_VOLTAGE_3_3V --- \u00A2\u00A4');
                  //   //     });
                  //   // } else {
                  //   //   window.toggl = true;
                  //   //   port.send('\u00A3\u00A5')
                  //   //     .then(() => {
                  //   //       console.log('SET_MODE_DMG / SET_VOLTAGE_5V --- \u00A3\u00A5');
                  //   //     });
                  //   // }
                  //
                  //   // port.send('\u0068')
                  //   //   .then(() => {
                  //   //     console.log('OFW_PCB_VER');
                  //   //   });
                  //   //
                  //
                  //   // //
                  //   //
                  //   // port.send('\u0056')
                  //   //   .then(() => {
                  //   //     console.log('OFW_FW_VER');
                  //   //   });
                  //
                  //   //
                  //   //   port.send('?')
                  //   //     .then(() => {
                  //   //       console.log('sent');
                  //   //     });
                  // });


                  this.activePorts.push(port);
                  this.emit('activePortsChange', [...this.activePorts]);
                })
                .catch(() => { /* silence! */
                });
            });
        });
    }, 1000);
  }

  changeMode(isGBA) {
    const port = this.activePorts[0];
    if (!port) {
      console.error('Active ports', this.activePorts);
      return;
    }

    if (isGBA) {
      port.send('\u00A2\u00A4')
        .then(() => {
          // eslint-disable-next-line no-console
          console.info('SET_MODE_AGB / SET_VOLTAGE_3_3V --- \u00A2\u00A4');
        });
    } else {
      port.send('\u00A3\u00A5')
        .then(() => {
          // eslint-disable-next-line no-console
          console.info('SET_MODE_DMG / SET_VOLTAGE_5V --- \u00A3\u00A5');
        });
    }
  }

  fwinq() {
    const port = this.activePorts[0];
    if (!port) {
      console.error('Active ports', this.activePorts);
      return;
    }

    port.send('\u00A1')
      .then(() => {
        // eslint-disable-next-line no-console
        console.info('QUERY_FW_INFO');
      });
  }

  // returns a list of devices
  requestPort() {
    if (!this.enabled) {
      return;
    }

    navigator.serial.requestPort()
      .then((device) => {
        if (device.readable) { // opened devices have a ReadableStream as device.readable
          throw new Error('device already opened');
        }

        return new SerialPort({
          device,
          baudRate: this.baudRate,
        });
      })
      .catch(() => null /* no device selected */)
      .then((port) => {
        if (port) {
          port.connect()
            .then(() => {
              this.activePorts.push(port);
              this.emit('activePortsChange', [...this.activePorts]);
            });
        }
      });
  }
}

export const baudRates = [2400, 4800, 9600, 19200, 28800, 38400, 57600, 76800, 115200, 230400, 460800, 576000, 921600];

export default new WebSerial();
