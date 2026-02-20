function callbackfn(val, idx, obj) {
  return val > 10;
}
var obj = {
  0: 11,
  1: 12
};
Object.defineProperty(obj, "length", {
  set: function () {},
  configurable: true
});
var testResult = Array.prototype.map.call(obj, callbackfn);