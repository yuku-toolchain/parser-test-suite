var wr;
function newTarget() {}
newTarget.prototype = undefined;
wr = Reflect.construct(WeakRef, [{}], newTarget);
newTarget.prototype = null;
wr = Reflect.construct(WeakRef, [{}], newTarget);
newTarget.prototype = true;
wr = Reflect.construct(WeakRef, [{}], newTarget);
newTarget.prototype = '';
wr = Reflect.construct(WeakRef, [{}], newTarget);
newTarget.prototype = Symbol();
wr = Reflect.construct(WeakRef, [{}], newTarget);
newTarget.prototype = 1;
wr = Reflect.construct(WeakRef, [{}], newTarget);