var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.findLast(function () {
  called++;
  return true;
});
called = 0;
result = arr.findLast(function (val) {
  called++;
  return val === 'Shoes';
});
result = arr.findLast(function () {
  return 'string';
});
result = arr.findLast(function () {
  return {};
});
result = arr.findLast(function () {
  return Symbol('');
});
result = arr.findLast(function () {
  return 1;
});
result = arr.findLast(function () {
  return -1;
});