// POC https://trello.com/c/WaaY8kQE/8-poc-use-usb-hid-library-to-find-all-the-controllers
const HID = require ('node-hid');



function pocListControllers (HID) {
  const allControllers = HID.devices();
  
  console.log('allControllers:');
  console.log(JSON.stringify(allControllers, undefined, 2));
}

pocListControllers(HID);

