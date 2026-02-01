var callCount;
var poisonedLastIndex = {
  get lastIndex() {
    return this.lastIndex_;
  },
  set lastIndex(_) {
    if (callCount === 1) {}
    this.lastIndex_ = _;
  },
  exec: function () {
    callCount += 1;
    return null;
  }
};
var nonWritableLastIndex = {
  exec: function () {
    Object.defineProperty(nonWritableLastIndex, 'lastIndex', {
      writable: false
    });
    callCount += 1;
    return null;
  }
};
callCount = 0;
callCount = 0;