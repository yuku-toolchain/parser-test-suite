var targetPrototype = {};
var target = new Proxy({}, {
  getPrototypeOf: function (_target) {
    return targetPrototype;
  }
});
var proxy = new Proxy(target, {});