Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return false;
  },
  configurable: true
});