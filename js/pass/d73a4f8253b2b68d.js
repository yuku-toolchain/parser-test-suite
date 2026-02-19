function DummyError() {}
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, "prototype", {
  get: function () {
    throw new DummyError();
  }
});