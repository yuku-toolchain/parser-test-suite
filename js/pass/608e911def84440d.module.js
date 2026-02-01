var map = new WeakMap();
var symbol = Symbol('a description');
map.getOrInsertComputed(symbol, function () {});