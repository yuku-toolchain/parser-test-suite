var set = new Set([[1, 11], [2, 22]]);
var iterator = set[Symbol.iterator]();
iterator.next.call(set[Symbol.iterator]());