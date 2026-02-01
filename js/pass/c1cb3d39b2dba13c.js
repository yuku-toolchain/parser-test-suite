var proto = {};
Object.defineProperty(proto, "value", {
  get: function () {
    return "inheritedAccessorProperty";
  }
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "value", {
  set: function () {}
});
var newObj = Object.create({}, {
  prop: descObj
});