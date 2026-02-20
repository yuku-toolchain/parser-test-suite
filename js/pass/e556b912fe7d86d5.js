var map = new Map([[1, 11], [2, 22]]);
var iterator = map[Symbol.iterator]();
iterator = map.entries();
iterator = map.keys();
iterator = map.values();
iterator.next.call(map[Symbol.iterator]());