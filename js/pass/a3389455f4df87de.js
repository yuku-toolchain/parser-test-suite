var other = $262.createRealm().global;
var newTarget = new other.Function();
function fn() {}
var finalizationRegistry;
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