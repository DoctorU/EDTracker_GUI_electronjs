const fs = require('node:fs/promises');
const open = fs.open;
const readline = require('node:readline/promises');

const cli = function () {
  this.request = undefined;
  this.response = undefined;
  this.device = undefined;
  this.deviceFD = undefined;
  this.deviceRead = undefined;
  this.deviceWrite = undefined;
  this.requestIF = undefined;
  this.responseFDs = undefined;
  this.init = async function (device, request, response) {

    this.response = response;
    this.request = request;
    this.device = device;
    console.log('initialised', this.device, this.request, this.response);
    return this;
  };

  this.connect = async function () {
    console.debug('creating device reader for ', this.device);
    this.deviceFD = await open(this.device);
    console.info('device ', this.device, ' opened with filedescriptor ', this.deviceFD);
    this.deviceFD.write('H');
    this.deviceRead = readline.createInterface({
      input: this.deviceFD.createReadStream()
    });
    let onFunction = function(device) {
      return function(line) {
        console.log('from device', device, line);
      }
    }
    this.deviceRead.on('line', onFunction(this.device));
    this.deviceRead.on('close', ()=>{'closing'});
    console.log('just checking', this.device, this.request, this.response);
    this.requestIF = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Command?: '
    });
    this.requestIF.prompt();
    this.requestIF.on('line', (command) => {
      console.log("Received command:" + command);
      if(this.deviceFD) {
        console.log('sending command to the device');
        this.deviceFD.write(command)
        .then(
          function() {
            console.log('command ' + command + ' sent.');
          }
        )
        .catch(
          function(error) {
            console.error('unable to write ' + error);
          }
        );
      } else {
        console.error('error: Cannot write command ' + command);
      }
      this.requestIF.prompt();
    });
    let descriptorCloser = function(cli) {
      return function() {
        console.log('closed already?');
        cli.closeFiles();
      }
    }
    this.requestIF.on('close', descriptorCloser(this));
    return this;
  }
  this.closeFiles = async function () {
    console.warn('not yet implemented: closeFiles!');
  }
  return this;
};

module.exports = cli();