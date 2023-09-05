const HID = require('node-hid')
const serialport = require('serialport');

let devices = HID.devices();
function jsonToString(object) {
  return JSON.stringify(object, undefined, 2);
}

console.log(jsonToString(devices));
