var stack = new DisposableStack();
var wasDisposed = stack.disposed;
stack.dispose();
var isDisposed = stack.disposed;