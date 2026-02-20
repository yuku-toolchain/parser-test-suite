var foo = function () {};
var obj = foo.bind({});
Object.defineProperty(obj, "property", {
  set: function () {}
});