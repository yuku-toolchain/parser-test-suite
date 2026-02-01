var loopCount = 0;
function* g() {
  while (true) {
    loopCount++;
    yield;
  }
}
var enterCount = 0;
function mapper() {
  enterCount++;
  iter.next();
}
var iter = g().map(mapper);