var obj = {};
Object.defineProperty(obj, "property", {
  set: undefined
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");