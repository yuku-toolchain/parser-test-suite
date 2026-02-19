var kValue = "abc";
function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === kValue;
  }
  return false;
}
var obj = {
  length: 2
};
Object.defineProperty(obj, "0", {
  get: function () {
    return kValue;
  },
  configurable: true
});
var testResult = Array.prototype.map.call(obj, callbackfn);