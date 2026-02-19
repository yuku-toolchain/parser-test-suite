var deref = WeakRef.prototype.deref;
var finalizationRegistry = new FinalizationRegistry(function () {});
var wm = new WeakMap();
var ws = new WeakSet();