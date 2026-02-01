var root = Object.defineProperty({}, 'target', {
  get: function () {}
});
var thrower = function () {};
var subject = new Proxy(Object.create(root), {
  getPrototypeOf: thrower
});