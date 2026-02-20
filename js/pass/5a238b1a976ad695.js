var obj = {};
var data = "data";
var attributes = {};
Object.defineProperty(attributes, "set", {
  get: function () {
    return function (value) {
      data = value;
    };
  }
});
Object.defineProperty(obj, "property", attributes);
obj.property = "ownAccessorProperty";