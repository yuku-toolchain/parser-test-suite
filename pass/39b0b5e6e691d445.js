var descObj = {};
Object.defineProperty(descObj, "value", {
  set: function () {}
});
var newObj = Object.create({}, {
  prop: descObj
});