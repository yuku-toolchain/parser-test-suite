var obj = {};
var fun = function () {};
Object.defineProperty(obj, "property", {
  set: fun,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");