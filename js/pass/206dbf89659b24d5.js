var accessed = false;
var obj = {
  length: 2
};
Object.defineProperty(obj, "0", {
  get: function () {
    throw new TypeError();
  },
  configurable: true
});
Object.defineProperty(obj, "1", {
  get: function () {
    accessed = true;
    return true;
  },
  configurable: true
});