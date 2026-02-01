const array = [1, 2, 3];
const map = Map.groupBy(array, function (i) {
  return i % 2 === 0 ? 'even' : 'odd';
});