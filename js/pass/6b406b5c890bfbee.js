var obj = {};
var fun = function () {
  return "ownSetProperty";
};
Object.defineProperty(obj, "property", {
  set: fun,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");