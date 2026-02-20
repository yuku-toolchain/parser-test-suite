var descriptor = Object.getOwnPropertyDescriptor(DisposableStack.prototype, 'disposed');
var stack = new DisposableStack();
descriptor.get.call(stack);