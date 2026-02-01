var arr = [];
Object.defineProperty(arr, "0", {
  set: function () {},
  configurable: true
});
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 2;
  },
  configurable: true
});