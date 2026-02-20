var map = new Map();
var iterationCount = 0;
var first = [0, 'a'];
var second = [1, 'b'];
map.set(0, 'a');
for (var x of map) {
  first = second;
  second = null;
  map.set(1, 'b');
  iterationCount += 1;
}