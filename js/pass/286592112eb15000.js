var obj = {};
Object.defineProperty(obj, "prop", {
  value: null
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");