var plainObjectTarget = new Proxy(Object.create(null), {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  getPrototypeOf: null
});