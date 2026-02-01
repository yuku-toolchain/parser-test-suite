var obj = {};
var fun = function () {
  return "ownGetProperty";
};
Object.defineProperty(obj, "property", {
  get: fun,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");
desc.get = "overwriteGetProperty";