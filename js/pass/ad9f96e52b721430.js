var foo = function () {};
var obj = foo.bind({});
Object.defineProperty(Function.prototype, "property", {
  set: function () {},
  configurable: true
});