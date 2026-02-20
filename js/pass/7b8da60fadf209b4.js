var arr = [];
Array.prototype[0] = false;
Object.defineProperty(arr, "0", {
  get: function () {
    return true;
  },
  configurable: true
});