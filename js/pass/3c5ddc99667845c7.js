const arr = ['hello', 'test', 'world'];
const map = Map.groupBy(arr, function (i) {
  return i.length;
});