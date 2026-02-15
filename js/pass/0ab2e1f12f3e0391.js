var arrayBuffer = Reflect.construct(ArrayBuffer, [8], Object);
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get: function () {
    return Array.prototype;
  }
});
var arrayBuffer = Reflect.construct(ArrayBuffer, [16], newTarget);