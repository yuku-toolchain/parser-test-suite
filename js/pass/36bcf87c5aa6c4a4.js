var target = {};
var p = new Proxy(target, {});
Object.defineProperty(p, "attr", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 1
});
Object.defineProperty(p, "attr", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 2
});