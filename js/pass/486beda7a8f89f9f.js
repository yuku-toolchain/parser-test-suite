var obj = {};
Object.defineProperty(obj, "prop", {
  get: undefined,
  set: undefined,
  enumerable: false,
  configurable: false
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");