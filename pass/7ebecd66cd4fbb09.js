var plainObjectTarget = new Proxy({}, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  isExtensible: null
});