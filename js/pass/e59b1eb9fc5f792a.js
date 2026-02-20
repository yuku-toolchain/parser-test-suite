var arr = [];
Object.defineProperty(arr, "1", {
  get: function () {
    return 3;
  },
  configurable: true
});
Object.defineProperties(arr, {
  "1": {
    value: 12
  }
});