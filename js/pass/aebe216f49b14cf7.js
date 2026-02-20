var obj = {
  prop1: 1001,
  prop2: function () {
    return 1002;
  }
};
Object.defineProperty(obj, "prop3", {
  value: 1003,
  enumerable: false,
  configurable: true
});
Object.defineProperty(obj, "prop4", {
  get: function () {
    return 1004;
  },
  enumerable: false,
  configurable: true
});
var arr = Object.keys(obj);