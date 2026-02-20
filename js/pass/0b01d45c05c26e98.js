var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
}
var iterCount = 0;
for (var [] = g(); iterCount < 1; ) {
  iterCount += 1;
}