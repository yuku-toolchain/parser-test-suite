var setMinutes = Date.prototype.setMinutes;
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