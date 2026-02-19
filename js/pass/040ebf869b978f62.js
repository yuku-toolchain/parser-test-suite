var obj = {};
Object.defineProperty(obj, "a", {
  get: function () {},
  set: function (_value) {},
  enumerable: true,
  configurable: true
});
obj.b = 2;
Object.defineProperty(obj, "a", {
  set: function (_value) {}
});
var arr = [];
arr.a = 1;
Object.defineProperty(arr, "length", {
  value: 2
});