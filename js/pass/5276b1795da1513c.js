var arr = [undefined, 'foo'];
var called = 0;
arr.findLast(function () {
  called++;
});