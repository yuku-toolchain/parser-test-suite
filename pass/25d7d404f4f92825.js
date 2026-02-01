var map = new Map();
var iterationCount = 0;
var first = [0, 'a'];
var second = [1, 'b'];
map.set(0, 'a');
map.set(1, 'b');
for (var x of map) {
  first = second;
  second = null;
  if (first !== null) {
    map.delete(1);
    map.set(1, 'b');
  }
  iterationCount += 1;
}