var base = {};
Object.defineProperty(base, "foo", {
  set: function () {},
  enumerable: true
});
var o = Object.create(base);