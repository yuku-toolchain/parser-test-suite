var map = new Map();
map.set('foo', 0);
map.set('bar', 1);
var count = 0;
var results = [];
map.forEach(function (value, key) {
  if (count === 0) {
    map.delete('foo');
    map.set('foo', 'baz');
  }
  results.push({
    value: value,
    key: key
  });
  count++;
});