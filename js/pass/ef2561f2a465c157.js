var target = new Proxy({}, {
  setPrototypeOf: function (_target, _value) {
    return false;
  }
});
var proxy = new Proxy(target, {});