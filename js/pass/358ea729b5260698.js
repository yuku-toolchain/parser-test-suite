var obj = {};
var attributes = {};
Object.defineProperty(attributes, "get", {
  get: function () {
    return function () {
      return "ownAccessorProperty";
    };
  }
});
Object.defineProperty(obj, "property", attributes);