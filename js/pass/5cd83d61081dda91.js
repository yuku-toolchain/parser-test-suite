var arr = {
  0: 0,
  1: 111,
  2: 2,
  length: 10
};
Object.defineProperty(arr, "0", {
  get: function () {
    delete arr[1];
    return 0;
  },
  configurable: true
});
Object.prototype[1] = 1;