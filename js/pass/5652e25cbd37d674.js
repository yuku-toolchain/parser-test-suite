var arr = {};
Object.defineProperty(arr, "length", {
  get: function () {
    arr[2] = "length";
    return 3;
  },
  configurable: true
});