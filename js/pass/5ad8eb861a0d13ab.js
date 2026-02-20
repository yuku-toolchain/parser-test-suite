var loopCount = 0;
function* g() {
  while (true) {
    loopCount++;
    yield;
  }
}
var enterCount = 0;
function predicate() {
  enterCount++;
  iter.next();
}
var iter = g().filter(predicate);