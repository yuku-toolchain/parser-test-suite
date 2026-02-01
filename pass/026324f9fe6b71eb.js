var arr = [0, 111, 2];
Object.defineProperty(arr, "2", {
  get: function () {
    delete arr[1];
    return 0;
  },
  configurable: true
});
Array.prototype[1] = 1;