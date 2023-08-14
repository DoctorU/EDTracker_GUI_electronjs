function channelName(ref) {
  return 'edtracker_' + ref;
}
module.exports = {
  DEVICES : channelName('devices'),
  DEVICE : channelName('device')
}