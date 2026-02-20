var target = {};
var p = new Proxy(target, {
  get: function () {
    return 1;
  }
});
Object.defineProperty(target, 'attr', {
  configurable: false,
  writable: false,
  value: 1
});