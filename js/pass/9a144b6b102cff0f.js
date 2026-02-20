var obj = {};
var descObj = {};
Object.defineProperty(descObj, "value", {
  get: function () {
    return "ownAccessorProperty";
  }
});
Object.defineProperties(obj, {
  property: descObj
});