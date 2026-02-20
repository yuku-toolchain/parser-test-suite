var set = new Set([1, 2]);
var iterator = set[Symbol.iterator]();
iterator = set.entries();
iterator = set.keys();
iterator = set.values();