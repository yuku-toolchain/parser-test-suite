var base = {};
Object.defineProperty(base, "foo", {
  value: 42
});
var o = Object.create(base);