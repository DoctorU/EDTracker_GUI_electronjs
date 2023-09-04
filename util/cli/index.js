let cli = require('./cli');
let yarg = require('yarg');
let HID = require('node-hid');
const readline = require('node:readline/promises');

const args = process.argv.slice(2);
const device = args[0];
const request = args[1];
const response = args[2];
console.log('unexpected args: ', args.slice(3));
if (request === '-') {
  request = process.stdin;
}
if (response === '-') {
  response = process.stdout;
}

console.group('startup')
console.info('device', device);
console.info('request', request);
console.info('response', response);
console.groupEnd();
console.group('devices')
console.info('looking for joysticks only');
let devices = HID.devices().filter((device) => device.manufacturer.match(/ED Tracker/) !== null);
for (const device of devices) {
  console.info('device', device.path, ': ', device.manufacturer, device.product);
}
console.groupEnd();
(async function() {
  try {
    await cli.init(device, request, response);
    await cli.connect();  
  } catch (error) {
    console.error(error);
  } finally {
    cli.closeFiles()
  }
  
})();
setInterval(() => console.debug('tick'), 1000);
