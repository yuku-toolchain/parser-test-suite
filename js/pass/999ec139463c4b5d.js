var arr = [undefined, 'foo'];
var called = 0;
arr.find(function () {
  called++;
});