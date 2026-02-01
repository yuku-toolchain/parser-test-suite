var stack = new DisposableStack();
var resource = {
  disposeReadCount: 0,
  get [Symbol.dispose]() {
    this.disposeReadCount++;
    return function () {};
  }
};
stack.use(resource);
stack.dispose();