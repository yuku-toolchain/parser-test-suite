function callbackfn(val, idx, obj) {
  return idx === 0 && val === 11;
}
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 11;
  },
  configurable: true
});
var newArr = [].filter(callbackfn);