var cleanupCallback = function () {};
var finalizationRegistry = new FinalizationRegistry(cleanupCallback);
for (let key of Object.getOwnPropertyNames(finalizationRegistry)) {}
for (let key of Object.getOwnPropertySymbols(finalizationRegistry)) {}