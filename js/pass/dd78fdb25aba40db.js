var obj = {};
Object.defineProperty(obj, "property", {
  writable: true,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");