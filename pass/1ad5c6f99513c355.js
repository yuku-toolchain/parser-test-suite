var props = new Error("test");
var result = false;
Object.getOwnPropertyNames(props).forEach(function (name) {
  props[name] = {
    value: 11,
    configurable: true
  };
});
Object.defineProperty(props, "prop15_2_3_5_4_14", {
  get: function () {
    result = this instanceof Error;
    return {};
  },
  enumerable: true
});
var newObj = Object.create({}, props);