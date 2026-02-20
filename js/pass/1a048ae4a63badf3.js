var obj = {};
var proto = {};
Object.defineProperty(proto, "writable", {
  get: function () {
    return true;
  }
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "writable", {
  set: function () {}
});
Object.defineProperty(obj, "property", child);