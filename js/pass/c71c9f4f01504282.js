var obj = {};
Object.defineProperty(obj, "foo", {
  set: function () {},
  configurable: true
});
Object.preventExtensions(obj);