var target = {};
Object.defineProperty(target, "foo", {
  configurable: false,
  enumerable: true,
  value: true
});
var p = new Proxy(target, {
  ownKeys: function () {
    return ["foo", "bar"];
  }
});
var keys = Object.getOwnPropertyNames(p);