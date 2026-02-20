var toString = Object.prototype.toString;
var promise = new Promise(function () {});
delete Promise.prototype[Symbol.toStringTag];