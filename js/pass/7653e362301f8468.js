function callbackfn(prevVal, curVal, idx, obj) {
  return obj.length === 2;
}
var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});
obj[0] = 12;
obj[1] = 11;
obj[2] = 9;