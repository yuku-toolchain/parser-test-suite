var proto = {};
var fun = function () {
  return "ownAccessorProperty";
};
Object.defineProperty(proto, "property", {
  get: fun,
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
var desc = Object.getOwnPropertyDescriptor(child, "property");