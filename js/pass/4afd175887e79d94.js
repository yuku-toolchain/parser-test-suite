var arr = {
  length: 8
};
Object.defineProperty(arr, "4", {
  get: function () {
    Object.defineProperty(arr, "1", {
      get: function () {
        return 1;
      },
      configurable: true
    });
    return 0;
  },
  configurable: true
});