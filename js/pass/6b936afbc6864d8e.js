var resource = {
  disposed: false,
  get [Symbol.dispose]() {
    return function () {
      this.disposed = true;
    };
  }
};
var stack = new DisposableStack();
stack.use(resource);
stack.dispose();