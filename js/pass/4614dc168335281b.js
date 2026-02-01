var result = false;
Object.defineProperty(JSON, "prop", {
  get: function () {
    result = this === JSON;
    return {};
  },
  enumerable: true,
  configurable: true
});
var newObj = Object.create({}, JSON);