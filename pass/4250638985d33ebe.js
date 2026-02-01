var foo = function () {};
var data = "data";
Object.defineProperty(Function.prototype, "prop", {
  get: function () {
    return data;
  },
  set: function (value) {
    data = value;
  },
  enumerable: true,
  configurable: true
});
var obj = foo.bind({});
obj.prop = "overrideData";