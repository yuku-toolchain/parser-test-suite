var obj = {};
Object.defineProperty(obj, "foo", {
  get: function () {
    return 10;
  },
  configurable: true
});
Object.seal(obj);