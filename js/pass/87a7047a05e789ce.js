var obj = {};
var proto = {};
Object.defineProperty(proto, "get", {
  get: function () {
    return function () {
      return "inheritedAccessorProperty";
    };
  }
});
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "get", {
  set: function () {}
});
Object.defineProperties(obj, {
  property: descObj
});