var obj = {};
var descObj = {};
Object.defineProperty(descObj, "value", {
  set: function () {}
});
Object.defineProperties(obj, {
  property: descObj
});