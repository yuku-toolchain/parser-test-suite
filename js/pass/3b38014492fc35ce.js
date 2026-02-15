var data = "data";
Object.defineProperty(Error.prototype, "prop", {
  get: function () {
    return data;
  },
  set: function (value) {
    data = value;
  },
  enumerable: true,
  configurable: true
});
var errObj = new Error();