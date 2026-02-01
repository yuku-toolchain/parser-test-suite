var arr = [];
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return false;
  },
  configurable: true
});
Object.defineProperty(arr, "0", {
  get: function () {
    return true;
  },
  configurable: true
});