var obj = {};
var props = new Number(-12);
var result = false;
Object.defineProperty(props, "prop", {
  get: function () {
    result = this instanceof Number;
    return {};
  },
  enumerable: true
});
Object.defineProperties(obj, props);