var voCallCount = 0;
var tsAccessCount = 0;
var obj = {
  valueOf: function () {
    voCallCount += 1;
    return 'valueOf test262';
  },
  get toString() {
    tsAccessCount += 1;
  }
};