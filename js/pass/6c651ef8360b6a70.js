function callbackfn(val, idx, obj) {
  return val === 11;
}
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 9;
  },
  configurable: true
});
var newArr = [11].filter(callbackfn);