var obj = {};
Object.defineProperty(obj, "prop", {
  get: function () {
    return 1003;
  },
  enumerable: true,
  configurable: true
});
var arr = Object.keys(obj);