var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.findIndex(function (val) {
  called++;
  return true;
});
called = 0;
result = arr.findIndex(function (val) {
  called++;
  return val === 'Bike';
});
result = arr.findIndex(function (val) {
  return 'string';
});
result = arr.findIndex(function (val) {
  return {};
});
result = arr.findIndex(function (val) {
  return Symbol('');
});
result = arr.findIndex(function (val) {
  return 1;
});
result = arr.findIndex(function (val) {
  return -1;
});