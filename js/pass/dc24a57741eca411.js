var obj = {};
var descObj = {};
Object.defineProperty(descObj, "get", {
  set: function () {}
});
Object.defineProperties(obj, {
  property: descObj
});