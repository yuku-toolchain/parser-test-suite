Object.defineProperty(Object.prototype, "0", {
  get: function () {
    return false;
  },
  configurable: true
});