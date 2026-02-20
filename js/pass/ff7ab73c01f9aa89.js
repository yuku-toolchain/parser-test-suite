var resource = {
  disposed: false,
  [Symbol.dispose]() {
    this.disposed = true;
  }
};
var i = 0;
var wasDisposedInForStatement;
for (using _ = resource; i < 1; i++) {
  wasDisposedInForStatement = resource.disposed;
}