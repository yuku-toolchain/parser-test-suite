function newTarget() {}
newTarget.prototype = undefined;
var arrayBuffer = Reflect.construct(ArrayBuffer, [1], newTarget);
newTarget.prototype = null;
var arrayBuffer = Reflect.construct(ArrayBuffer, [2], newTarget);
newTarget.prototype = true;
var arrayBuffer = Reflect.construct(ArrayBuffer, [3], newTarget);
newTarget.prototype = "";
var arrayBuffer = Reflect.construct(ArrayBuffer, [4], newTarget);
newTarget.prototype = Symbol();
var arrayBuffer = Reflect.construct(ArrayBuffer, [5], newTarget);
newTarget.prototype = 1;
var arrayBuffer = Reflect.construct(ArrayBuffer, [6], newTarget);