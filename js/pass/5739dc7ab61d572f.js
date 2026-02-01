var obj = {};
Object.defineProperty(obj, "prop", {
  value: this
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");