var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
}
var callCount = 0;
function* f([...[]]) {
  callCount = callCount + 1;
}
f(g()).next();