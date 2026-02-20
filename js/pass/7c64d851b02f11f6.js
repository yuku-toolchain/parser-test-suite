var unregister = FinalizationRegistry.prototype.unregister;
var token = {};
var wr = new WeakRef({});
var wm = new WeakMap();
var ws = new WeakSet();