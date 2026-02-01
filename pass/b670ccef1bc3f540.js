var map = new WeakMap();
var key = {};
map.set(key, 1);
map.set({}, 2);
map.delete(key);
map.set({}, 3);