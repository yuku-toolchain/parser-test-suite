var target = new Proxy({}, {
  preventExtensions: function (_target) {
    return false;
  }
});
var proxy = new Proxy(target, {});