var proto = {
  property: "inheritedDataProperty"
};
var Con = function () {};
Con.ptototype = proto;
var child = new Con();
var desc = Object.getOwnPropertyDescriptor(child, "property");