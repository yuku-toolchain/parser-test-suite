var tsCallCount = 0;
var obj = {
  valueOf: null,
  toString: function () {
    tsCallCount += 1;
    return 'toString test262';
  }
};