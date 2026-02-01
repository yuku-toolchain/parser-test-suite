var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val > 10;
}
var obj = {
  1: 12,
  2: 9,
  length: 2
};
Object.defineProperty(obj, "0", {
  get: function () {
    obj.length = 3;
    return 11;
  },
  configurable: true
});