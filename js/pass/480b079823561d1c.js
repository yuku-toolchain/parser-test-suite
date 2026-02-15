var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
}
var ranCatch = false;
try {
  throw [];
} catch ([[] = g()]) {
  ranCatch = true;
}