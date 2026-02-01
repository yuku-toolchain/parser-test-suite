var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.findIndex(function (val) {
  called++;
  return false;
});
result = arr.findIndex(function (val) {
  return '';
});
result = arr.findIndex(function (val) {
  return undefined;
});
result = arr.findIndex(function (val) {
  return null;
});
result = arr.findIndex(function (val) {
  return 0;
});
result = arr.findIndex(function (val) {
  return NaN;
});