function newTarget() {}
newTarget.prototype = undefined;
var arrayBuffer = Reflect.construct(SharedArrayBuffer, [1], newTarget);
newTarget.prototype = null;
var arrayBuffer = Reflect.construct(SharedArrayBuffer, [2], newTarget);
newTarget.prototype = true;
var arrayBuffer = Reflect.construct(SharedArrayBuffer, [3], newTarget);
newTarget.prototype = "";
var arrayBuffer = Reflect.construct(SharedArrayBuffer, [4], newTarget);
newTarget.prototype = Symbol();
var arrayBuffer = Reflect.construct(SharedArrayBuffer, [5], newTarget);
newTarget.prototype = 1;
var arrayBuffer = Reflect.construct(SharedArrayBuffer, [6], newTarget);