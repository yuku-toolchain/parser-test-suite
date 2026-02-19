var data = "data";
Object.defineProperty(Number.prototype, "prop", {
  get: function () {
    return data;
  },
  enumerable: false,
  configurable: true
});
var numObj = new Number();