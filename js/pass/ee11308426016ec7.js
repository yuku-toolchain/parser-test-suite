var arr = [0, 1, 2, "last", 4];
Object.defineProperty(arr, "4", {
  get: function () {
    arr.length = 3;
    return 0;
  },
  configurable: true
});