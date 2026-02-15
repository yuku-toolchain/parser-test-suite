var toString = Object.prototype.toString;
var wm = new WeakMap();
delete WeakMap.prototype[Symbol.toStringTag];