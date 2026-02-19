var obj = {};
var props = new Boolean(true);
var result = false;
Object.defineProperty(props, "prop", {
  get: function () {
    result = this instanceof Boolean;
    return {};
  },
  enumerable: true
});
Object.defineProperties(obj, props);