Object.defineProperty(Object.prototype, "0", {
  get: function () {
    return 10;
  },
  configurable: true
});
Object.defineProperty(Object.prototype, "1", {
  get: function () {
    return 20;
  },
  configurable: true
});
Object.defineProperty(Object.prototype, "2", {
  get: function () {
    return 30;
  },
  configurable: true
});