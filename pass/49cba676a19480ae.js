var resource = {
  disposed: false,
  [Symbol.dispose]() {
    this.disposed = true;
  }
};
function* f() {
  using _ = resource;
  yield;
}
var g = f();
var wasDisposedBeforeGeneratorStarted = resource.disposed;
g.next();
var wasDisposedWhileSuspended = resource.disposed;
var isDisposedAfterGeneratorCompleted = resource.disposed;