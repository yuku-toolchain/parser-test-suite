var json = '{"a": 1, "b": 2}';
var obj = JSON.parse(json, function (key, value) {
  if (key === 'a') {
    Object.defineProperty(this, 'b', {
      configurable: false
    });
  }
  if (key === 'b') return;
  return value;
});