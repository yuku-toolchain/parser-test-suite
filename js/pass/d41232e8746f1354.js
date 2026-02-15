var buffer = new ArrayBuffer(8);
function newTarget() {}
var proto = {};
newTarget.prototype = proto;
var sample = Reflect.construct(DataView, [buffer, 0], newTarget);