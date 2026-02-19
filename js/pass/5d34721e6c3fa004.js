var data = "data";
Object.defineProperty(Object.prototype, "prop", {
  get: function () {
    return data;
  },
  enumerable: false,
  configurable: true
});