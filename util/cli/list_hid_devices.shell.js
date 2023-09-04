const l = require('./list_hid_devices');
l.list().then(l.log);