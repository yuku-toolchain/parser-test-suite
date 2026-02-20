var target = {};
Object.defineProperty(target, "foo", {
  configurable: false,
  enumerable: false,
  value: 1
});
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (t, prop) {
    return;
  }
});