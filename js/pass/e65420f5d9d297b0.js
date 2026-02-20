var set = new Set([1, 2]);
var iterator = set.entries();
iterator.next.call(set[Symbol.iterator]());