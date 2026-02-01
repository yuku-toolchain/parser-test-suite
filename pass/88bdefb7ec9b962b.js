var obj = {};
var proto = {};
Object.defineProperty(proto, "value", {
  get: function () {
    return "inheritedAccessorProperty";
  }
});
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "value", {
  value: "ownDataProperty"
});
Object.defineProperties(obj, {
  property: descObj
});