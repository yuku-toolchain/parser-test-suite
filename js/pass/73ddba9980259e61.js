var data = "data";
Object.defineProperty(String.prototype, "prop", {
  get: function () {
    return data;
  },
  set: function (value) {
    data = value;
  },
  enumerable: true,
  configurable: true
});
var strObj = new String();