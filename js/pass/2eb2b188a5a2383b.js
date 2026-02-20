const arr = [-0, 0, 1, 2, 3];
let calls = 0;
Map.groupBy(arr, function (n, i) {
  calls++;
  return null;
});