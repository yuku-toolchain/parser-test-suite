var proto = {};
Object.defineProperty(proto, "property", {
  get: function () {
    return "inheritedDataProperty";
  },
  configurable: true
});
var Con = function () {};
Con.ptototype = proto;
var child = new Con();
Object.defineProperty(child, "property", {
  value: "ownDataProperty",
  configurable: true
});
var desc = Object.getOwnPropertyDescriptor(child, "property");