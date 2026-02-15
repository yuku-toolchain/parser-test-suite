var descObj = {};
Object.defineProperty(descObj, "configurable", {
  set: function () {}
});
var newObj = Object.create({}, {
  prop: descObj
});