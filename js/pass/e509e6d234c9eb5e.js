var obj = {
  0: 11,
  1: 12
};
var accessed = false;
Object.defineProperty(obj, "length", {
  get: function () {
    accessed = true;
    return 0;
  },
  configurable: true
});