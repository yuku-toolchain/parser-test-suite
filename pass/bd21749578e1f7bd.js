var set = new Set();
var iterationCount = 0;
var first = 0;
var second = 1;
set.add(0);
for (var x of set) {
  first = second;
  second = null;
  set.add(1);
  iterationCount += 1;
}