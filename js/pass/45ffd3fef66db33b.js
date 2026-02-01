function callbackfn(val, idx, obj) {
  return idx === 0 && val === 11;
}
var arr = [];
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 5;
  },
  configurable: true
});
Object.defineProperty(arr, "0", {
  get: function () {
    return 11;
  },
  configurable: true
});
var newArr = arr.filter(callbackfn);