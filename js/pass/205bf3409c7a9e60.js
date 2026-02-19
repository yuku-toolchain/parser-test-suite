var target = Object.create({
  foo: 1
});
var p = new Proxy(target, {
  getPrototypeOf: function () {
    return {};
  }
});
Object.preventExtensions(target);