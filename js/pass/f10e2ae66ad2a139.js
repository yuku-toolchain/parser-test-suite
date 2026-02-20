var descObj = {};
Object.defineProperty(descObj, "get", {
  set: function () {}
});
var newObj = Object.create({}, {
  prop: descObj
});