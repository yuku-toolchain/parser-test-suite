var base = {};
Object.defineProperty(base, "foo", {
  set: function () {}
});
var o = Object.create(base);