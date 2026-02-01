var lengthCallCount = 0;
var symbol = Symbol('');
var start = {
  valueOf: function () {}
};
var len = {
  valueOf: function () {
    lengthCallCount += 1;
  }
};