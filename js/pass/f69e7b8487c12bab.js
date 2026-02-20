var root = Object.defineProperty({}, 'target', {
  set: function () {}
});
var thrower = function () {};
var subject = new Proxy(root, {
  getOwnPropertyDescriptor: thrower
});