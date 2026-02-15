var obj = {};
var proto = {};
Object.defineProperty(proto, "configurable", {
  get: function () {
    return true;
  }
});
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "configurable", {
  get: function () {
    return false;
  }
});
Object.defineProperties(obj, {
  prop: descObj
});