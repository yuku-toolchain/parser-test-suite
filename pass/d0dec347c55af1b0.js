var target = {};
Object.defineProperty(target, "attr", {
  configurable: false,
  enumerable: true,
  value: 1
});
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (t, prop) {
    return Object.getOwnPropertyDescriptor(t, prop);
  }
});
var proxyDesc = Object.getOwnPropertyDescriptor(p, "attr");