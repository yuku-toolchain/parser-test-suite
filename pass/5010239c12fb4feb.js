var obj = {};
var strObj = new String();
Object.defineProperty(obj, "prop", {
  value: strObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");