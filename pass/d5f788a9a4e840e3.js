var root = Object.defineProperty({}, 'target', {
  set: function () {}
});
var thrower = function () {};
var subject = new Proxy(Object.create(root), {
  getPrototypeOf: thrower
});