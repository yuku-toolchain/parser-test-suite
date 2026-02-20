var map = new Map([['foo', 'valid foo'], ['bar', false], ['baz', 'valid baz']]);
map.set(0, false);
map.set(1, false);
map.set(2, 'valid 2');
map.delete(1);
map.delete('bar');
map.set(0, 'valid 0');
var results = [];
var callback = function (value) {
  results.push(value);
};
map.forEach(callback);
map.clear();
results = [];
map.forEach(callback);