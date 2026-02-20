var obj = {};
Object.defineProperty(obj, "prop", {
  value: undefined
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");