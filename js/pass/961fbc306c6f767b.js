var obj = {};
var proto = {
  writable: true
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "writable", {
  get: function () {
    return false;
  }
});
Object.defineProperties(obj, {
  property: descObj
});