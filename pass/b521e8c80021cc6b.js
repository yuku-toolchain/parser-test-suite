var base = {};
Object.defineProperty(base, "foo", {
  value: 42,
  configurable: true,
  enumerable: true
});
var o = Object.create(base);