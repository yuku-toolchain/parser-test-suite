var finalizationRegistry = new FinalizationRegistry(function () {});
var target = {};
var s = Symbol.for('registered symbol');