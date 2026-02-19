var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val > 10;
}
var obj = {
  0: 9,
  2: 12,
  length: 3
};
Object.defineProperty(obj, "1", {
  get: function () {
    obj.length = 2;
    return 8;
  },
  configurable: true
});