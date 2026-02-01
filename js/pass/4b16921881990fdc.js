var obj = {
  length: 3
};
Object.defineProperty(obj, "0", {
  get: function () {
    return 0;
  },
  configurable: true
});
Object.defineProperty(obj, "1", {
  get: function () {
    return 1;
  },
  configurable: true
});
Object.defineProperty(obj, "2", {
  get: function () {
    return 2;
  },
  configurable: true
});