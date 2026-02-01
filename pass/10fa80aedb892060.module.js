var obj = {};
Object.defineProperty(obj, "prop", {
  get: function () {
    return undefined;
  },
  set: undefined,
  enumerable: true,
  configurable: true
});