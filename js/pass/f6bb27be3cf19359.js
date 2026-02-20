Object.defineProperty(Function.prototype, "prototype", {
  get: function () {}
});
var result = 0 instanceof Function.prototype;