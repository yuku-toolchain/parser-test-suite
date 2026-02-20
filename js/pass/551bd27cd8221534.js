var descObj = {};
Object.defineProperty(descObj, "set", {
  set: function () {}
});
var newObj = Object.create({}, {
  prop: descObj
});
var hasProperty = newObj.hasOwnProperty("prop");
var desc = Object.getOwnPropertyDescriptor(newObj, "prop");