var target = {};
var wr = new WeakRef(target);
for (let key of Object.getOwnPropertyNames(wr)) {}
for (let key of Object.getOwnPropertySymbols(wr)) {}