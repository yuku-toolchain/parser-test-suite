var arr = ['Shoes', 'Car', 'Bike'];
var results = [];
arr.findLast(function (kValue) {
  if (results.length === 0) {
    arr.splice(1, 1);
  }
  results.push(kValue);
});
results = [];
arr = ['Skateboard', 'Barefoot'];
arr.findLast(function (kValue) {
  if (results.length === 0) {
    arr.push('Motorcycle');
    arr[0] = 'Magic Carpet';
  }
  results.push(kValue);
});