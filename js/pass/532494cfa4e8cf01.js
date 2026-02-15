var descObj = {};
Object.defineProperty(descObj, "value", {
  get: function () {
    return "ownAccessorProperty";
  }
});
var newObj = Object.create({}, {
  prop: descObj
});