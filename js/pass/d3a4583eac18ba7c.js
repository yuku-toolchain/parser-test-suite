var map = new WeakMap();
var foo = {};
var bar = {};
var baz = {};
map.getOrInsertComputed(foo, () => {
  map.set(foo, 0);
  return 3;
});
map.getOrInsertComputed(bar, () => {
  map.set(bar, 1);
});
map.getOrInsertComputed(baz, () => {
  map.set(baz, 2);
  return 'string';
});