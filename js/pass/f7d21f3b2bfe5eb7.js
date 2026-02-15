var set = new Set();
var iterationCount = 0;
set.add(0);
set.add(1);
for (var x of set) {
  set.delete(1);
  iterationCount += 1;
}