var obj = {};
Object.defineProperty(obj, "a", {
  get: function () {},
  set: function (_value) {},
  enumerable: true,
  configurable: true
});
obj.b = 2;
Object.defineProperty(obj, "a", {
  value: 1
});