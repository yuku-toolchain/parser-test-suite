var props = new RegExp();
var result = false;
Object.defineProperty(props, "prop", {
  get: function () {
    result = this instanceof RegExp;
    return {};
  },
  enumerable: true
});
var newObj = Object.create({}, props);