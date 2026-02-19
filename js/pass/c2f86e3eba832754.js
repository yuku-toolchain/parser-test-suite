function callbackfn(val, idx, obj) {
  return val > 10;
}
var obj = {
  0: 9,
  1: 8,
  length: 0
};
var testResult = Array.prototype.map.call(obj, callbackfn);