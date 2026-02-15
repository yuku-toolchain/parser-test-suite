var arr = [undefined, 'foo'];
var called = 0;
arr.findLastIndex(function () {
  called++;
});