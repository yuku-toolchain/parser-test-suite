var arr = [0, 1, 2];
Object.defineProperty(Array.prototype, "2", {
  get: function () {
    return "prototype";
  },
  configurable: true
});
Object.defineProperty(arr, "1", {
  get: function () {
    arr.length = 2;
    return 1;
  },
  configurable: true
});