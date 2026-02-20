var obj = {
  length: 1
};
Object.prototype[0] = false;
Object.defineProperty(obj, "0", {
  get: function () {
    return true;
  },
  configurable: true
});