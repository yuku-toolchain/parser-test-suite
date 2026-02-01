var log = [];
var invalidKeys = [1, false, undefined, 'string', null];
var s = new WeakMap();
for (let invalidKey of invalidKeys) {}