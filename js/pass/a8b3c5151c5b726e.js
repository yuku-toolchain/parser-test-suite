var fun = function () {
  return 10;
};
var proto = {};
Object.defineProperty(proto, "set", {
  set: function () {}
});
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
descObj.get = fun;
var obj = {};
Object.defineProperties(obj, {
  prop: descObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");