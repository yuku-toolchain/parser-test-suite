var obj = {};
Object.defineProperty(obj, "prop", {
  get: function () {
    return 2;
  },
  set: undefined,
  enumerable: true,
  configurable: true
});