require ('../lib/read_hid.js');
const HID = require('node-hid');

const devices = HID.devices();

// console.log(JSON.stringify(devices, undefined, 2));
const joysticks = devices.find((d)=> d.usagePage==1 && d.usage==4);
console.log(JSON.stringify(joysticks, undefined, 2));
console.log('path:',joysticks[0].path);

const edtracker = new HID(joysticks[0].path);
edtracker.on('data', ()=> console.log (data));
edtracker.on('error', (error) => {
  try {
    edtracker.close()
  } finally {
    console.log('Error:', error);
    throw new Error(error);
  }
});
