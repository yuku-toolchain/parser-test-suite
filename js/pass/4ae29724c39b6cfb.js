var finalizationRegistry = new FinalizationRegistry(function () {});
var target = {};
var symbolTarget = Symbol('a description');