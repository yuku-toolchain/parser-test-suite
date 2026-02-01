var arr = [];
Object.defineProperty(arr, "0", {
  get: function () {
    return 12;
  },
  configurable: true
});
Object.defineProperties(arr, {
  "0": {
    get: undefined
  }
});