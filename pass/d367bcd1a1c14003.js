var obj = {};
var proto = {};
Object.defineProperty(proto, "get", {
  get: function () {
    return function () {
      return "inheritedAccessorProperty";
    };
  }
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "get", {
  set: function () {}
});
Object.defineProperty(obj, "property", child);