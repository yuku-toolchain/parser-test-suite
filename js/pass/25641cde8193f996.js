var arr = [1];
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 100;
  },
  configurable: true
});
Object.defineProperty(arr, "0", {
  set: function () {},
  configurable: true
});