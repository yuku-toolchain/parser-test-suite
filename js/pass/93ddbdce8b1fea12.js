var target = {};
var descriptor = {
  configurable: true,
  enumerable: true,
  value: 1
};
Object.defineProperty(target, "bar", descriptor);
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (t, prop) {
    return Object.getOwnPropertyDescriptor(t, prop);
  }
});
var proxyDesc = Object.getOwnPropertyDescriptor(p, "bar");