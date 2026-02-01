var set = new Set([[1, 11], [2, 22]]);
var iterator = set.values();
iterator.next.call(set[Symbol.iterator]());