var root = Object.defineProperty({}, 'target', {
  set: function () {}
});
var thrower = function () {};
var intermediary = new Proxy(Object.create(root), {
  getOwnPropertyDescriptor: thrower
});
var subject = Object.create(intermediary);