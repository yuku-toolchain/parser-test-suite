var callCount;
var poisonedLastIndex = {
  get lastIndex() {
    callCount += 1;
  },
  set lastIndex(_) {}
};
var nonWritableLastIndex = {
  get lastIndex() {
    callCount += 1;
  },
  exec: function () {
    return null;
  }
};
callCount = 0;
callCount = 0;