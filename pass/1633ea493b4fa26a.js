var map = new Map();
var result = map.forEach(function () {
  return true;
});
map.set(1, 1);
result = map.forEach(function () {
  return true;
});