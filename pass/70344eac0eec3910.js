var buffer = new ArrayBuffer(8);
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get() {}
});