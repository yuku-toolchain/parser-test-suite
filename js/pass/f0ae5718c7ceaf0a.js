var plainObject = {
  get foo() {}
};
Object.defineProperty(plainObject, "bar", {
  configurable: false
});
var plainObjectTarget = new Proxy(plainObject, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {});
var func = function () {};
var funcTarget = new Proxy(func, {});
var funcProxy = new Proxy(funcTarget, {});