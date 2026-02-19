var stack;
function newTarget() {}
newTarget.prototype = undefined;
stack = Reflect.construct(DisposableStack, [], newTarget);
newTarget.prototype = null;
stack = Reflect.construct(DisposableStack, [], newTarget);
newTarget.prototype = true;
stack = Reflect.construct(DisposableStack, [], newTarget);
newTarget.prototype = '';
stack = Reflect.construct(DisposableStack, [], newTarget);
newTarget.prototype = Symbol();
stack = Reflect.construct(DisposableStack, [], newTarget);
newTarget.prototype = 1;
stack = Reflect.construct(DisposableStack, [], newTarget);