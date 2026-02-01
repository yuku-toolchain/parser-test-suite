var foo = {};
var bar = {};
var baz = [];
var map = new WeakMap([[foo, 0]]);
map.set(bar, 1);
map.set(baz, 2);