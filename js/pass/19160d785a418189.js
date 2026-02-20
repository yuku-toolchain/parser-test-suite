var obj = {
  1: true,
  2: false
};
Object.defineProperty(obj, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});