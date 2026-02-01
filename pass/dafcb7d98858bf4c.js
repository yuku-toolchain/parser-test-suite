var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {
    obj[1] = "accumulator";
    return 3;
  },
  configurable: true
});