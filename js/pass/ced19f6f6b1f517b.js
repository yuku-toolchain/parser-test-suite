var finalizationRegistry = new FinalizationRegistry(function () {});
var s = Symbol.for('registered symbol');