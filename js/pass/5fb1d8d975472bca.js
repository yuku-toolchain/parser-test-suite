var obj = {};
var descObj = {};
Object.defineProperty(descObj, "get", {
  get: function () {
    return function () {
      return "ownAccessorProperty";
    };
  }
});
Object.defineProperties(obj, {
  property: descObj
});