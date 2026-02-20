var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val > 10;
}
var obj = {
  0: 11,
  1: 8,
  length: 20
};
var newArr = Array.prototype.filter.call(obj, callbackfn);