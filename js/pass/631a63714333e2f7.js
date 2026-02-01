var map = new Map([['item', 0]]);
var map2 = new Map();
var x = map.set('item', 42);
x = Map.prototype.set.call(map, 'item', 0);
x = map2.set.call(map, 'item', 0);