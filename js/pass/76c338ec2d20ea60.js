var map = new Map();
var iterationCount = 0;
map.set(0, 'a');
for (var x of map) {
  map.set(1, 'b');
  map.delete(1);
  iterationCount += 1;
}