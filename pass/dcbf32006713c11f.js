var finalizationRegistry;
function newTarget() {}
function fn() {}
newTarget.prototype = undefined;
finalizationRegistry = Reflect.construct(FinalizationRegistry, [fn], newTarget);
newTarget.prototype = null;
finalizationRegistry = Reflect.construct(FinalizationRegistry, [fn], newTarget);
newTarget.prototype = true;
finalizationRegistry = Reflect.construct(FinalizationRegistry, [fn], newTarget);
newTarget.prototype = '';
finalizationRegistry = Reflect.construct(FinalizationRegistry, [fn], newTarget);
newTarget.prototype = Symbol();
finalizationRegistry = Reflect.construct(FinalizationRegistry, [fn], newTarget);
newTarget.prototype = 1;
finalizationRegistry = Reflect.construct(FinalizationRegistry, [fn], newTarget);