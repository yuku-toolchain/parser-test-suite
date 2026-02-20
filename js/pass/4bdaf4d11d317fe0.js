var obj = {};
Object.defineProperty(obj, "prop", {
  value: -Infinity
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");