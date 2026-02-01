var map = new Map([[1, 11], [2, 22]]);
var iterator = map.entries();
iterator.next.call(map[Symbol.iterator]());