var obj = {};
var fun = function () {
  return "ownAccessorProperty";
};
Object.defineProperty(obj, "property", {
  get: fun,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");