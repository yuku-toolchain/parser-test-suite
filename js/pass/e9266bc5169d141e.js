var obj = {};
var descObj = {};
Object.defineProperty(descObj, "configurable", {
  set: function () {}
});
Object.defineProperties(obj, {
  prop: descObj
});