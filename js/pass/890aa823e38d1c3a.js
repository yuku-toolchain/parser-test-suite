var target = {};
var p = new Proxy(target, {
  deleteProperty: function () {
    return 0;
  }
});
Object.defineProperties(target, {
  isConfigurable: {
    value: 1,
    configurable: true
  },
  notConfigurable: {
    value: 1,
    configurable: false
  }
});