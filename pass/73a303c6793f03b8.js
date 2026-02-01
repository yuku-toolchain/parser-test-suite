const array = [{
  name: 'A',
  rating: 2
}, {
  name: 'B',
  rating: 3
}, {
  name: 'C',
  rating: 2
}, {
  name: 'D',
  rating: 3
}, {
  name: 'E',
  rating: 3
}];
array.sort((a, b) => b.rating - a.rating);
const reduced = array.reduce((acc, element) => acc + element.name, '');