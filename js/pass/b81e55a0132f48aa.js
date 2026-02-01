var setTime = Date.prototype.setTime;
var callCount = 0;
var arg = {
  valueOf: function () {
    callCount += 1;
    return 1;
  }
};
var symbol = Symbol();