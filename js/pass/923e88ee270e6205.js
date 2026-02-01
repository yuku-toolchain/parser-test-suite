var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.findLastIndex(function () {
  called++;
  return false;
});
result = arr.findLastIndex(function () {
  return '';
});
result = arr.findLastIndex(function () {
  return undefined;
});
result = arr.findLastIndex(function () {
  return null;
});
result = arr.findLastIndex(function () {
  return 0;
});
result = arr.findLastIndex(function () {
  return NaN;
});