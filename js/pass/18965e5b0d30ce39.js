var foo = function () {};
var data = "data";
Object.defineProperty(Function.prototype, "prop", {
  get: function () {
    return data;
  },
  enumerable: false,
  configurable: true
});
var obj = foo.bind({});