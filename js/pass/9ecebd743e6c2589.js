var voCallCount = 0;
var obj = {
  valueOf: function () {
    voCallCount += 1;
    return 'valueOf test262';
  },
  toString: null
};