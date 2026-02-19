var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val > 2;
}
var arr = [1, 2, 3, 4];
arr.map(callbackfn);