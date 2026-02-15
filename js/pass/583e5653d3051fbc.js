var obj = {};
var proto = {
  value: "inheritedDataProperty"
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
child.value = "ownDataProperty";
Object.defineProperty(obj, "property", child);