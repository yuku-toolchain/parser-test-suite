var foo = function () {};
var obj = foo.bind({});
Object.defineProperty(obj, "property", {
  get: function () {
    return 12;
  }
});