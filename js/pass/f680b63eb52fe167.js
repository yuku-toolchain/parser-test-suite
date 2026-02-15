var getterCalled = false;
function DummyError() {}
Object.defineProperty(Function.prototype, "prototype", {
  get: function () {
    getterCalled = true;
    throw new DummyError();
  }
});