var voAccessCount = 0;
var tsCallCount = 0;
var obj = {
  get valueOf() {
    voAccessCount += 1;
  },
  toString: function () {
    tsCallCount += 1;
    return 'toString test262';
  }
};