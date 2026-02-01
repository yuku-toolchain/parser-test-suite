var stack = new DisposableStack();
var wasDisposed = stack.disposed;
stack.move();
var isDisposed = stack.disposed;