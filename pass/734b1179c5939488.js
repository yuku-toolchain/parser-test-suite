var map = new Map();
var result = map.set(1, 1);
result = map.set(1, 1).set(2, 2).set(3, 3);
var map2 = new Map();
result = map2.set.call(map, 4, 4);