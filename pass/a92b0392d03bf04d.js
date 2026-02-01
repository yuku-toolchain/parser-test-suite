var obj = {};
function callbackfn(prevVal, curVal, idx, obj) {}
Object.defineProperty(obj, "length", {
  get: function () {
    obj[2] = "accumulator";
    return 3;
  },
  configurable: true
});