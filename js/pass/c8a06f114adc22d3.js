var map = new Map();
map.set('foo', 42);
map.set('bar', 'baz');
var results = [];
var callback = function (value, key, thisArg) {
  results.push({
    value: value,
    key: key,
    thisArg: thisArg
  });
};
map.forEach(callback);