var obj = {};
var attributes = {
  get: function () {
    return "ownDataProperty";
  }
};
Object.defineProperty(obj, "property", attributes);