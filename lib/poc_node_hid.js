// POC https://trello.com/c/WaaY8kQE/8-poc-use-usb-hid-library-to-find-all-the-controllers
const HID = require ('node-hid');



async function pocListControllers (HID) {
  const devices = HID.devices();
  
  console.log('devices:');
  console.log(JSON.stringify(devices, undefined, 2));
  return devices;
}

function getEDTracker (devices) {
  const vendorId = 5840, productId = 2796;
  return devices.find(d => { 
    return d.vendorId === vendorId && d.productId === productId;
  });

}

const devices = pocListControllers(HID);
