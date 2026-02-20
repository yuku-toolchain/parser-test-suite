var preIterVisible = false;
var obj = {
  length: 3
};
Object.defineProperty(obj, "2", {
  get: function () {
    preIterVisible = true;
    return false;
  },
  configurable: true
});
Object.defineProperty(obj, "1", {
  get: function () {
    if (preIterVisible) {
      return true;
    } else {
      return false;
    }
  },
  configurable: true
});