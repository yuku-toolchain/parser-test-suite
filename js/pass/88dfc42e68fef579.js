var obj = {};
Object.defineProperty(obj, "a", {
  get: function () {},
  enumerable: true,
  configurable: true
});
obj.b = "b";
Object.defineProperty(obj, "a", {
  get: function () {
    return "a";
  }
});
var proxy = new Proxy({}, {});
Object.defineProperty(proxy, "a", {
  get: function () {},
  enumerable: true,
  configurable: true
});
proxy.b = "b";
Object.defineProperty(proxy, "a", {
  value: "a"
});