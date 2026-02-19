const arr = ['hello', 'test', 'world'];
const obj = Object.groupBy(arr, function (i) {
  return i.length;
});