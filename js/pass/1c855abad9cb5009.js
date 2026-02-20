var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {
    return {
      toString: function () {}
    };
  },
  configurable: true
});