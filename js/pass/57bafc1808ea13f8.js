var props = {};
Object.defineProperty(props, "prop", {
  get: function () {
    return {};
  },
  enumerable: false
});
var newObj = Object.create({}, props);