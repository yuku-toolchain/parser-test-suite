var obj = {};
var errObj = new Error();
Object.defineProperty(obj, "prop", {
  value: errObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");