var obj = {};
var proto = {
  get: function () {
    return "inheritedDataProperty";
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(obj, "property", child);