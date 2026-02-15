function callbackfn(val, idx, obj) {
  return true;
}
var arr = [0, 1, 2, "last"];
Object.defineProperty(arr, "0", {
  get: function () {
    arr.length = 3;
    return 0;
  },
  configurable: true
});
var newArr = arr.filter(callbackfn);