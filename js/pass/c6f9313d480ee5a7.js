var plainObject = {};
var plainObjectTarget = new Proxy(plainObject, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  setPrototypeOf: null
});
Object.setPrototypeOf(plainObjectProxy, null);
var cyclicPrototype = Object.create(plainObject);