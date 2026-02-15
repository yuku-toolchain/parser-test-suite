var base = {};
Object.defineProperty(base, "foo", {
  value: 42,
  writable: true
});
var o = Object.create(base);