var obj = {};
Object.defineProperty(obj, "foo", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: true
});
var preCheck = Object.isExtensible(obj);
Object.seal(obj);
if (!preCheck) {}