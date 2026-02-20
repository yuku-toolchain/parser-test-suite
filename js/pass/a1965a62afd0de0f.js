var base = {};
Object.defineProperty(base, "foo", {
  value: 42,
  enumerable: true
});
var o = Object.create(base);