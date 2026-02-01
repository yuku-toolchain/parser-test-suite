var newObj = {};
var props = {};
var i = 0;
Object.defineProperty(props, "prop1", {
  get: function () {
    i++;
    return {};
  },
  enumerable: true
});
Object.defineProperty(props, "prop2", {
  get: function () {
    if (1 === i++) {
      throw new RangeError();
    } else {
      return {};
    }
  },
  enumerable: true
});