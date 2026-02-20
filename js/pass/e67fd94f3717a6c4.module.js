var obj = {};
Object.defineProperty(obj, "prop", {
  get: function () {
    return 11;
  },
  set: undefined,
  enumerable: true,
  configurable: true
});