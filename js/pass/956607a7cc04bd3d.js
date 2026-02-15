var s = Symbol(2);
var map = new Map([[4, 4], ['foo3', 3], [s, 2]]);
map.set(null, 42);
map.set(1, 'valid');
var results = [];
map.forEach(function (value, key) {
  results.push({
    value: value,
    key: key
  });
});
var result = results.pop();
result = results.pop();
result = results.pop();