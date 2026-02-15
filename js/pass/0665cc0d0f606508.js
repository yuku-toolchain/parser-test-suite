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
var descObj = new ConstructFun();
Object.defineProperty(descObj, "get", {
  value: function () {
    return "ownDataProperty";
  }
});
var newObj = Object.create({}, {
  prop: descObj
});