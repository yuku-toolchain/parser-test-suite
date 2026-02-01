var proto = {};
Object.defineProperty(proto, "property", {
  get: function () {
    return "inheritedAccessorProperty";
  },
  configurable: true
});
var Con = function () {};
Con.ptototype = proto;
var child = new Con();
var fun = function () {
  return "ownAccessorProperty";
};
Object.defineProperty(child, "property", {
  get: fun,
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(child, "property");