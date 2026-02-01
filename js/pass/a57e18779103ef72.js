var props = {};
Object.defineProperty(props, "prop", {
  get: function () {
    return {};
  },
  enumerable: true
});
var newObj = Object.create({}, props);