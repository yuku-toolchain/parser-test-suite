var get = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').get;
var thrower = function () {};
var subject = new Proxy({}, {
  getPrototypeOf: thrower
});