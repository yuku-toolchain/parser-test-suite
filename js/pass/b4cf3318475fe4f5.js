var stack1 = new DisposableStack();
var disposed = [];
stack1.defer(() => {
  disposed.push(1);
});
stack1.defer(() => {
  disposed.push(2);
});
var stack2 = stack1.move();
var wasDisposed = disposed.slice();
stack2.dispose();
var isDisposed = disposed.slice();