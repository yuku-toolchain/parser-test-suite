Object.defineProperty(Object.prototype, '__proto__', {
  set: function () {}
});
var A = class extends Array {};