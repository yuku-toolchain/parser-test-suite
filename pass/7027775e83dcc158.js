var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.findLastIndex(function () {
  called++;
  return true;
});
called = 0;
result = arr.findLastIndex(function (val) {
  called++;
  return val === 'Shoes';
});
result = arr.findLastIndex(function () {
  return 'string';
});
result = arr.findLastIndex(function () {
  return {};
});
result = arr.findLastIndex(function () {
  return Symbol('');
});
result = arr.findLastIndex(function () {
  return 1;
});
result = arr.findLastIndex(function () {
  return -1;
});