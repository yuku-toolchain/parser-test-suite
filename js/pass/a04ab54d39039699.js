function Custom() {}
var p = new Proxy({}, {
  getPrototypeOf() {
    return Custom.prototype;
  }
});