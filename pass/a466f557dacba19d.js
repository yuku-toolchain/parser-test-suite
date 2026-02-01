var foo = function () {};
var obj = foo.bind({});
Object.defineProperty(Function.prototype, "property", {
  get: function () {
    return 12;
  },
  configurable: true
});