var obj = {
  length: 1
};
Object.defineProperty(Object.prototype, "0", {
  get: function () {
    return false;
  },
  configurable: true
});
Object.defineProperty(obj, "0", {
  get: function () {
    return true;
  },
  configurable: true
});