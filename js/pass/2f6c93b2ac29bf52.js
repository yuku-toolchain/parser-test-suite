Object.defineProperty(Object.prototype, '__proto__', {
  get: function () {}
});
class A extends Array {}