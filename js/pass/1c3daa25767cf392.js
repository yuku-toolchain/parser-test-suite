var obj = {};
var props = {};
Object.defineProperty(props, "prop", {
  get: function () {
    return {
      set: function () {}
    };
  },
  enumerable: true
});
Object.defineProperties(obj, props);