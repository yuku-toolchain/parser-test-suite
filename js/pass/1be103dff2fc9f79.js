var register = FinalizationRegistry.prototype.register;
var target = {};
var wr = new WeakRef({});
var wm = new WeakMap();
var ws = new WeakSet();