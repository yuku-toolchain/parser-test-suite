var root = Object.defineProperty({}, 'target', {
  get: function () {}
});
var thrower = function () {};
var subject = new Proxy(root, {
  getOwnPropertyDescriptor: thrower
});