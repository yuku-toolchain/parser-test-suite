var target = {};
var p = new Proxy(target, {
  deleteProperty: function () {
    return true;
  }
});
Object.defineProperty(target, "attr", {
  configurable: false,
  value: 1
});