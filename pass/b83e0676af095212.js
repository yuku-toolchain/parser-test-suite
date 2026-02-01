var accessed = false;
var obj = {
  length: 0
};
Object.defineProperty(obj, "0", {
  get: function () {
    accessed = true;
    return 10;
  },
  configurable: true
});