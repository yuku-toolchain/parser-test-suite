function callbackfn(val, idx, obj) {
  return idx === 2 && val === 12;
}
var arr = [];
Object.defineProperty(arr, "2", {
  get: function () {
    return 12;
  },
  configurable: true
});
var newArr = arr.filter(callbackfn);