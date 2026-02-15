Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 11;
  },
  configurable: true
});
var arr = [];
Object.defineProperties(arr, {
  "0": {
    get: function () {
      return 12;
    },
    configurable: false
  }
});