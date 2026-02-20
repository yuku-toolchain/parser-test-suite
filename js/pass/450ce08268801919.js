var target = {};
var p = new Proxy(target, {
  get: function () {
    return 2;
  }
});
Object.defineProperty(target, 'attr', {
  configurable: false,
  writable: true,
  value: 1
});