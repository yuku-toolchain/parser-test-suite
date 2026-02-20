var toString = Object.prototype.toString;
var wm = new WeakSet();
delete WeakSet.prototype[Symbol.toStringTag];