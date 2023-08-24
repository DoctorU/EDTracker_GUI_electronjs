function channelName(ref) {
  return 'edtracker:' + ref;
}
module.exports = {
  DEVICES : channelName('devices'),
  DEVICE : channelName('device')
}