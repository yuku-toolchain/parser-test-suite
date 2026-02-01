var obj = {};
Object.defineProperty(obj, "prop", {
  get: function () {
    return 0;
  },
  set: undefined,
  enumerable: true,
  configurable: true
});