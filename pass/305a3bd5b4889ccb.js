var obj = {};
var descObj = {};
Object.defineProperty(descObj, "writable", {
  set: function () {}
});
Object.defineProperties(obj, {
  property: descObj
});