const HID = require ('node-hid').HID;

//All should be async (i.e., return Promises)
async function getDevice(hidDefinition={}) {
  const _hid_path = hidDefinition.path;
  return new HID(_hid_path);
}

async function watchDevice(device) {
  device.on('data', (data) => console.log(data));
  device.on('error', (error) => {throw new Error(error);});
}
async function closeDevice(device) {
  device.close();
}