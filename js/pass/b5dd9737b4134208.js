var target = {};
var symbol = Symbol();
Object.defineProperty(target, symbol, {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: false
});
var proxy = new Proxy(target, {
  ownKeys: function () {
    return [];
  }
});