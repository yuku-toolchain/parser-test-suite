function callbackfn(val, idx, obj) {
  return undefined === val && idx === 0;
}
var arr = [];
Object.defineProperty(arr, "0", {
  set: function () {},
  configurable: true
});
var newArr = arr.filter(callbackfn);