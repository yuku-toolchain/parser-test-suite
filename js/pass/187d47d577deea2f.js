function callbackfn(val, idx, obj) {
  return true;
}
var arr = [0, 1, 2];
Object.defineProperty(arr, "2", {
  get: function () {
    return "unconfigurable";
  },
  configurable: false
});
Object.defineProperty(arr, "1", {
  get: function () {
    arr.length = 2;
    return 1;
  },
  configurable: true
});
var newArr = arr.filter(callbackfn);