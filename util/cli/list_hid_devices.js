const HID = require('node-hid');

async function list() {
  return HID.devices();
};
async function log(devices) {
  console.log(devices);
}

// filters is an array of keys such as:
/*
[
    {"usagePage": [1,2,3]},
    {"usage": [1,4,6], "usagePage": [1]}
]
*/
async function filter(devices, filters) {
  for (const filter of filters) {
    //get the keys:
    for (const filterkey of Object.keys(filter)) {
      const options = filter[filterkey]; //expect an array
      devices.filter((device) => { return options.filter(device[filterkey]) });
    }
  }
}
module.exports = {
  list,
  filter,
  log
}