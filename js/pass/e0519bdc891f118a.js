Object.defineProperty(WeakMap.prototype, 'set', {
  get: function () {}
});
new WeakMap();
new WeakMap(null);