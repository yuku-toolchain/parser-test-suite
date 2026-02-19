var kValue = "abc";
function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return val === kValue;
  }
  return false;
}
Object.defineProperty(Array.prototype, "1", {
  get: function () {
    return kValue;
  },
  configurable: true
});