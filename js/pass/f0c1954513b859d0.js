var obj = {};
Object.defineProperty(obj, "prop", {
  value: false
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");