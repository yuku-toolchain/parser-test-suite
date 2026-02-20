var target = {};
var p = new Proxy(target, {
  get: function () {
    return 2;
  }
});
Object.defineProperty(target, 'attr', {
  configurable: true,
  writable: false,
  value: 1
});