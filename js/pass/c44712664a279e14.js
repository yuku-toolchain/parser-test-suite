var stack = new DisposableStack();
var disposed = false;
stack.defer(() => {
  disposed = true;
});
stack.dispose();