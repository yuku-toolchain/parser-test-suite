function DummyError() {}
let newTarget = Object.defineProperty((function () {}).bind(null), "prototype", {
  get() {
    throw new DummyError();
  }
});