var obj = {};
var funObj = function () {};
Object.defineProperty(obj, "prop", {
  value: funObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");