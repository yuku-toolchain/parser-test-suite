var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.find(function (val) {
  called++;
  return false;
});
result = arr.find(function (val) {
  return '';
});
result = arr.find(function (val) {
  return undefined;
});
result = arr.find(function (val) {
  return null;
});
result = arr.find(function (val) {
  return 0;
});
result = arr.find(function (val) {
  return NaN;
});