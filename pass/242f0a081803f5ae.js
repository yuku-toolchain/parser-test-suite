Object.defineProperty(WeakSet.prototype, 'add', {
  get: function () {}
});
new WeakSet();
new WeakSet(null);