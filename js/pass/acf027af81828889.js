var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.findLast(function () {
  called++;
  return false;
});
result = arr.findLast(function () {
  return '';
});
result = arr.findLast(function () {
  return undefined;
});
result = arr.findLast(function () {
  return null;
});
result = arr.findLast(function () {
  return 0;
});
result = arr.findLast(function () {
  return NaN;
});