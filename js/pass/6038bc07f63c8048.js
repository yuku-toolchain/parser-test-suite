var target = Object.create(Array.prototype);
var p = new Proxy(target, {
  getPrototypeOf: function () {
    return Array.prototype;
  }
});
Object.preventExtensions(target);