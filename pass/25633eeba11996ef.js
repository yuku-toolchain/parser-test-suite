Object.prototype.b = 3;
var json = '{"a": 1, "b": 2}';
var obj = JSON.parse(json, function (key, value) {
  if (key === 'a') {}
  return value;
});