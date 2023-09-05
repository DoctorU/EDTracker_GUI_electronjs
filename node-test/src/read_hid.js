const HID = require('node-hid');

const devices = HID.devices();
console.log(JSON.stringify(devices, undefined, 2));
const filteredDevices = devices.filter((device)=> device.interface >= 0);
console.log('devices', filteredDevices.map((d)=> d.path + ' ' + d.manufacturer));
const paths = filteredDevices.map((device)=> device.path).filter((el, idx, arr)=> arr.indexOf(el) === idx);
console.log('paths', paths);

function connect(path) {
  console.info('connecting...');
  const device = new HID.HID(path);
  return device;
}
async function startWatching (device) {
  console.debug('inside running');
  // var data = "";
  device.on('data', function(newdata) {
    const tmsp = new Date().getTime();
    console.log(newdata)
    // if(newdata != data) {
    //   data = newdata;
    //   console.log(tmsp, 'new data', data);
    // }
  }).on('error', function(error) {
    console.error('ERROR', error);
  });
  return device;
}

function readFeatures(device) {
  // device.read
  return;
}

const userArgs = process.argv.slice(2)
var device = undefined;
if(userArgs) {
  const path = userArgs[0]
  console.info('path:', path);
  if(path) {
    device = connect(path);
    readFeatures(device);
    startWatching(device).then(()=> {
      console.log('started watching');
      device.write([0x00]);
    });
  }
}


//console to continually poll.
setInterval(()=>console.log('Tick.'), 1000);
device?.close();