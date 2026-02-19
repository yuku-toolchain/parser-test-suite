var arr = ['Shoes', 'Car', 'Bike'];
var called = 0;
var result = arr.find(function (val) {
  called++;
  return true;
});
called = 0;
result = arr.find(function (val) {
  called++;
  return val === 'Bike';
});
result = arr.find(function (val) {
  return 'string';
});
result = arr.find(function (val) {
  return {};
});
result = arr.find(function (val) {
  return Symbol('');
});
result = arr.find(function (val) {
  return 1;
});
result = arr.find(function (val) {
  return -1;
});