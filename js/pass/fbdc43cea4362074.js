function callbackfn(val, idx, obj) {
  return val === 111 && idx === 0;
}
var arr = [];
Array.prototype[0] = 10;
Object.defineProperty(arr, "0", {
  get: function () {
    return 111;
  },
  configurable: true
});
var newArr = arr.filter(callbackfn);