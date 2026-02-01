var data = "data";
Object.defineProperty(Array.prototype, "prop", {
  get: function () {
    return data;
  },
  set: function (value) {
    data = value;
  },
  enumerable: true,
  configurable: true
});
var arrObj = [];
arrObj.prop = "myOwnProperty";