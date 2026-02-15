var obj = {};
Object.defineProperty(obj, "foo", {
  get: function () {
    return 9;
  },
  configurable: true
});
Object.preventExtensions(obj);