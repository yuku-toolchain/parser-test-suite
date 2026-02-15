function callbackfn(val, idx, obj) {
  return undefined === val && idx === 0;
}
var arr = [];
Object.defineProperty(arr, "0", {
  set: function () {},
  configurable: true
});
Array.prototype[0] = 100;
var newArr = arr.filter(callbackfn);