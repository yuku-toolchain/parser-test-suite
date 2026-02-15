var target = new Proxy({}, {
  getPrototypeOf: function () {}
});
Object.preventExtensions(target);
var proxy = new Proxy(target, {
  setPrototypeOf: function () {
    return true;
  }
});