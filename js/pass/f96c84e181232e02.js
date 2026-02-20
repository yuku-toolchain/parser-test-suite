var data = "data";
Object.defineProperty(Date.prototype, "prop", {
  get: function () {
    return data;
  },
  set: function (value) {
    data = value;
  },
  enumerable: true,
  configurable: true
});
var dateObj = new Date();
dateObj.prop = "myOwnProperty";