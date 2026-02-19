var obj = {};
var boolObj = new Boolean();
Object.defineProperty(obj, "prop", {
  value: boolObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");