var fn = function () {};
var register = FinalizationRegistry.prototype.register;
var finalizationRegistry = new FinalizationRegistry(fn);
var target = {};