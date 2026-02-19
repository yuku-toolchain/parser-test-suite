var obj = {};
Object.defineProperty(obj, "prop", {
  value: 1001
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");