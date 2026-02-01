var descriptor = Object.getOwnPropertyDescriptor(AsyncDisposableStack.prototype, 'disposed');
var stack = new AsyncDisposableStack();
descriptor.get.call(stack);