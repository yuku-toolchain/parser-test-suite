var obj = {};
var result = false;
Object.defineProperty(Math, "prop", {
  get: function () {
    result = this === Math;
    return {};
  },
  enumerable: true,
  configurable: true
});
Object.defineProperties(obj, Math);