var target = {};
var p = new Proxy(target, {
  defineProperty: function (t, prop, desc) {
    return true;
  }
});
Object.defineProperty(target, "foo", {
  value: 1,
  configurable: true
});