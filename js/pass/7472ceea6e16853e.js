var obj = {};
var fun = function () {
  return "ownSetProperty";
};
Object.defineProperty(obj, "property", {
  set: fun,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(obj, "property");
var propDefined = ("set" in desc);
delete desc.set;
var propDeleted = ("set" in desc);