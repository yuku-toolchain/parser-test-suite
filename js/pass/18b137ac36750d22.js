var map = new Map();
map.set('foo', 0);
map.set('bar', 1);
var count = 0;
var results = [];
map.forEach(function (value, key) {
  if (count === 0) {
    map.set('baz', 2);
  }
  results.push({
    value: value,
    key: key
  });
  count++;
});