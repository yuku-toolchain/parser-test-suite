var obj = {};
var regObj = new RegExp();
Object.defineProperty(obj, "prop", {
  value: regObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");