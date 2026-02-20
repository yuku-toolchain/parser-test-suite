var accessed = false;
var arr = [];
Object.defineProperty(arr, "0", {
  get: function () {
    throw new TypeError();
  },
  configurable: true
});
Object.defineProperty(arr, "1", {
  get: function () {
    accessed = true;
    return true;
  },
  configurable: true
});