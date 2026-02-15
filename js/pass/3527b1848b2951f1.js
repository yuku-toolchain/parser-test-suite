var thrower = function () {};
var subject = new Proxy({}, {
  setPrototypeOf: thrower
});