var obj = {
  length: 1
};
Object.defineProperty(Object.prototype, "0", {
  get: function () {
    return 20;
  },
  configurable: true
});
Object.defineProperty(obj, "0", {
  set: function () {},
  configurable: true
});