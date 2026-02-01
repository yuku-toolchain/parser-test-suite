var preIterVisible = false;
var arr = [];
Object.defineProperty(arr, "2", {
  get: function () {
    preIterVisible = true;
    return false;
  },
  configurable: true
});
Object.defineProperty(arr, "1", {
  get: function () {
    if (preIterVisible) {
      return true;
    } else {
      return false;
    }
  },
  configurable: true
});