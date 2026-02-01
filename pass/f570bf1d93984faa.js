var kValue = "abc";
function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === kValue;
  }
  return false;
}
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return kValue;
  },
  configurable: true
});
var testResult = [].map(callbackfn);