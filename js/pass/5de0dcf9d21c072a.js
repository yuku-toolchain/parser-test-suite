var obj = {};
var proto = {};
Object.defineProperty(proto, "writable", {
  set: function () {}
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(obj, "property", child);