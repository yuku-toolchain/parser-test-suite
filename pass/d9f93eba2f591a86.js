var log = [];
var options = {
  maxByteLength: {
    toString: function () {
      log.push('toString');
      return {};
    },
    valueOf: function () {
      log.push('valueOf');
      return {};
    }
  }
};