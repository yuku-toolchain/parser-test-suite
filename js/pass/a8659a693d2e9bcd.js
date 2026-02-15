var target = new Proxy({}, {
  isExtensible: function () {}
});
var proxy = new Proxy(target, {
  setPrototypeOf: function () {
    return true;
  }
});