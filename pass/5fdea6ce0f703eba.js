var obj = {};
Object.defineProperty(obj, "prop", {
  value: NaN
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");