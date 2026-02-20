Array.prototype[1] = 3;
var json = '[1, 2]';
var arr = JSON.parse(json, function (key, value) {
  if (key === '0') {}
  return value;
});