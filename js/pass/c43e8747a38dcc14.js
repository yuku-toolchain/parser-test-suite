var obj = {};
var arrObj = [];
Object.defineProperty(obj, "prop", {
  value: arrObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");