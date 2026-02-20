var proto = {};
Object.defineProperty(proto, "foo", {
  value: 9,
  writable: false,
  configurable: false
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "foo", {
  value: 12,
  writable: true,
  configurable: false
});
Object.preventExtensions(child);