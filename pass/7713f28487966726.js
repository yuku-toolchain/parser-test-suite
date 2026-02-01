var obj = {};
var accessed = false;
Object.defineProperty(obj, "length", {
  get: function () {
    accessed = true;
    return 2;
  },
  configurable: true
});