var foo = function () {};
Object.defineProperty(Function.prototype, "prop", {
  value: 1001,
  writable: true,
  enumerable: true,
  configurable: true
});
var obj = foo.bind({});