var target, proxy;
target = {};
proxy = new Proxy(target, {
  setPrototypeOf: function () {
    return true;
  }
});
Object.preventExtensions(target);
var proto = {};
target = Object.setPrototypeOf({}, proto);
proxy = new Proxy(target, {
  setPrototypeOf: function () {
    Object.setPrototypeOf(target, {});
    Object.preventExtensions(target);
    return true;
  }
});