var log = [];
var newLength = {
  toString: function () {
    log.push('toString');
    return {};
  },
  valueOf: function () {
    log.push('valueOf');
    return {};
  }
};
var ab = new ArrayBuffer(0);