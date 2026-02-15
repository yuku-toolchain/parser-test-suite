function callbackfn(prevVal, curVal, idx, obj) {
  return curVal > 10;
}
var obj = {
  0: 11,
  1: 12
};
Object.defineProperty(obj, "length", {
  get: function () {
    return {
      toString: function () {}
    };
  },
  configurable: true
});