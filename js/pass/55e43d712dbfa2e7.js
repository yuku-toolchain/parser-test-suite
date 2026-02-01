var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return val > 10;
}
var obj = {
  0: 11,
  1: 12,
  length: 0
};
var testResult = Array.prototype.map.call(obj, callbackfn);