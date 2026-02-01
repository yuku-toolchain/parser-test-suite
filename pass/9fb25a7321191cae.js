var foo = function () {};
var obj = foo.bind({});
Object.defineProperty(Function.prototype, "property", {
  get: function () {
    return 3;
  },
  configurable: true
});
Object.defineProperty(obj, "property", {
  get: function () {
    return 12;
  }
});