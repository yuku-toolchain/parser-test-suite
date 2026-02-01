var plainObject = {};
var plainObjectTarget = new Proxy(plainObject, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  preventExtensions: null
});
Object.preventExtensions(plainObjectProxy);