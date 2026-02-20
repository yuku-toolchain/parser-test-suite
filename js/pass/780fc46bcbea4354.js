var obj = {};
var proto = {};
Object.defineProperty(proto, "value", {
  set: function () {}
});
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperties(obj, {
  property: descObj
});