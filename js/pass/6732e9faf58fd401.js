var map = new Map();
var iterationCount = 0;
map.set(0, 'a');
map.set(1, 'b');
for (var x of map) {
  map.delete(1);
  iterationCount += 1;
}