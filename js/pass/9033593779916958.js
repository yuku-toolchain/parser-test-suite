var base = {};
Object.defineProperty(base, "foo", {
  set: function () {},
  enumerable: true,
  configurable: true
});
var o = Object.create(base);