Object.defineProperty(Object.prototype, '__proto__', {
  set: function () {}
});
class A extends Array {}