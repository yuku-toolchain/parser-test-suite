function callbackfn(val, idx, obj) {
  return val > 10;
}
var obj = {
  0: 12,
  1: 11,
  2: 9,
  length: 2
};
var testResult = Array.prototype.map.call(obj, callbackfn);