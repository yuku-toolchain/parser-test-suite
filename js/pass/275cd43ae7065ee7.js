var obj = {};
var proto = {};
Object.defineProperty(proto, "writable", {
  set: function () {}
});
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperties(obj, {
  property: descObj
});