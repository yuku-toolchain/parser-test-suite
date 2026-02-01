function callbackfn(val, idx, obj) {
  return undefined === val && idx === 0;
}
Object.defineProperty(Array.prototype, "0", {
  set: function () {},
  configurable: true
});
var newArr = [].filter(callbackfn);