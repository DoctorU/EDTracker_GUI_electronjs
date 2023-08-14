const HID = require ('node-hid');
const _devices = {
  devices: undefined,
  get devices() {
    return this.devices;
  } ,
  set devices(devices) {
    this.devices = devices;
  },
  reset: function () {
    this.devices = undefined;
  },
  get initialised () {
    return this.devices !== undefined;
  }
}

const allDevices = async function () {
  return this._devices.devices;
}

const loadDevices = async function () {
  if (!_devices.initialised) {
    _devices.devices = HID.devices();
  }
  return this._devices.devices;
}

module.exports = {
  "reset": this._devices.reset,
  "init": this.loadDevices,
  "list": this.allDevices
}