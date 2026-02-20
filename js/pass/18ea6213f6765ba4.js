var foo = function () {};
var obj = foo.bind({});
Function.prototype.property = 3;
Object.defineProperty(obj, "property", {
  get: function () {
    return 12;
  }
});