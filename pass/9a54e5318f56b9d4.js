var obj = {};
Object.defineProperty(obj, "prop", {
  get: undefined,
  set: undefined,
  enumerable: false,
  configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
try {
  Object.defineProperty(obj, "prop", {
    configurable: true
  });
} catch (e) {}