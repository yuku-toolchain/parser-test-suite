var obj = {};
var proto = {};
Object.defineProperty(proto, "configurable", {
  set: function () {}
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(obj, "property", child);