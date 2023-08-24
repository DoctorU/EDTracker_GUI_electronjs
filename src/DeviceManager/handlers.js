const handleForm = function (e) {
  e.preventDefault();
}
const handleConnect = function (e) {
  e.stopPropagation();
  console.log('connect');
};
const handleDisconnect = function (devices) {
  return function (e) {
    e.stopPropagation();
    console.log('disconnect');
    //deleting one of the items from the array:
    const clone = JSON.parse(JSON.stringify(devices));
    const pop = clone.pop();
    console.warn('popped one!', pop);
    setDevices(clone);
  }
};
const handleHello = function (e) {
  e.stopPropagation();
  console.log('Hello');
};
const handleRefresh = function (e) {
  e.stopPropagation();
  console.log('Refresh');
  setDevices([]);
  fetchDevices();
};

module.exports = {
  handleRefresh:handleRefresh,
  handleHello:handleHello,
  handleDisconnect:handleDisconnect,
  handleConnect:handleConnect,
  handleForm:handleForm
}