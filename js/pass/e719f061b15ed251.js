var descObj = {};
Object.defineProperty(descObj, "get", {
  get: function () {
    return function () {
      return "ownAccessorProperty";
    };
  }
});
var newObj = Object.create({}, {
  prop: descObj
});