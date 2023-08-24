function uniq() {
  // An Array filter
  return ((el, idx, arr) => arr.indexOf(el) === idx);
}

module.exports = {
  uniq:uniq
}