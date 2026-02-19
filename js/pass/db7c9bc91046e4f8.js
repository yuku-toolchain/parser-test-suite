var stack = new DisposableStack();
var disposed = [];
var resource1 = {
  [Symbol.dispose]() {
    disposed.push(this);
  }
};
var resource2 = {
  [Symbol.dispose]() {
    disposed.push(this);
  }
};
stack.use(resource1);
stack.use(resource2);
stack.dispose();