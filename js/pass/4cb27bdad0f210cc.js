var arr = [20];
Object.defineProperty(arr, "0", {
  get: function () {
    arr[1] = 1;
    return 0;
  },
  configurable: true
});