const arr = [-0, +0];
const map = Map.groupBy(arr, function (i) {
  return i;
});