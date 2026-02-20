var buffer = new ArrayBuffer(8);
function newTarget() {}
newTarget.prototype = null;
var sample = Reflect.construct(DataView, [buffer, 0], newTarget);