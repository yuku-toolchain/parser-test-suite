var plainObject = Object.create(null);
Object.defineProperty(plainObject, "foo", {
  configurable: false
});
var plainObjectTarget = new Proxy(plainObject, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  defineProperty: null
});
Object.defineProperty(plainObjectProxy, "bar", {
  get: function () {
    return 2;
  }
});
var regExp = /(?:)/g;
var regExpTarget = new Proxy(regExp, {});
var regExpProxy = new Proxy(regExpTarget, {
  defineProperty: null
});