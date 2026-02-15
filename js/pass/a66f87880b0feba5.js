var obj = {};
var fun = function () {
  return "ownDataProperty";
};
Object.defineProperty(obj, "property", {
  get: fun,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");