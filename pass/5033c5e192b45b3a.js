var target = {};
Object.defineProperty(target, 'prop', {
  value: 2,
  writable: true,
  enumerable: false,
  configurable: true
});
var proxy = new Proxy(target, {
  ownKeys: function () {
    return [];
  }
});
Object.preventExtensions(target);