function Custom() {}
var target = {};
var p = new Proxy(target, {
  getPrototypeOf() {
    return Custom.prototype;
  }
});
Object.preventExtensions(target);