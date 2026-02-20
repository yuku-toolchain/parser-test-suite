var setMilliseconds = Date.prototype.setMilliseconds;
var callCount = 0;
var arg = {
  valueOf: function () {
    callCount += 1;
    return 1;
  }
};
var args = (function () {
  return arguments;
})();