var arr = [undefined, 'foo'];
var called = 0;
arr.findIndex(function () {
  called++;
});