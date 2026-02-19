var kValue = "abc";
function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === kValue;
  }
  return false;
}
var arr = [];
Array.prototype[0] = 11;
Object.defineProperty(arr, "0", {
  get: function () {
    return kValue;
  },
  configurable: true
});
var testResult = arr.map(callbackfn);