var arr = {
  2: 2,
  length: 20
};
Object.defineProperty(arr, "3", {
  get: function () {
    delete Object.prototype[1];
    return 0;
  },
  configurable: true
});
Object.prototype[1] = 1;