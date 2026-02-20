var stack;
function newTarget() {}
newTarget.prototype = undefined;
stack = Reflect.construct(AsyncDisposableStack, [], newTarget);
newTarget.prototype = null;
stack = Reflect.construct(AsyncDisposableStack, [], newTarget);
newTarget.prototype = true;
stack = Reflect.construct(AsyncDisposableStack, [], newTarget);
newTarget.prototype = '';
stack = Reflect.construct(AsyncDisposableStack, [], newTarget);
newTarget.prototype = Symbol();
stack = Reflect.construct(AsyncDisposableStack, [], newTarget);
newTarget.prototype = 1;
stack = Reflect.construct(AsyncDisposableStack, [], newTarget);