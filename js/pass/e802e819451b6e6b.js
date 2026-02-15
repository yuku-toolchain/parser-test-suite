var stack = new DisposableStack();
var resource = {
  disposed: false,
  [Symbol.dispose]() {
    this.disposed = true;
  }
};
stack.use(resource);
stack.dispose();