var noop = function () {};
var thrower = function () {};
var subject = new Proxy({}, {
  defineProperty: thrower
});