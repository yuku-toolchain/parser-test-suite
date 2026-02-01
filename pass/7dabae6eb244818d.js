var arr = {
  2: 6.99
};
Object.defineProperty(arr, "length", {
  get: function () {
    delete arr[2];
    return 3;
  },
  configurable: true
});