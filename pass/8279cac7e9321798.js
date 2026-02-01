var hasOwn = Object.prototype.hasOwnProperty;
var hasOwnTarget = new Proxy(hasOwn, {});
var hasOwnProxy = new Proxy(hasOwnTarget, {});
var obj = {
  foo: 1
};