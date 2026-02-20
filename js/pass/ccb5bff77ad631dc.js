var first = 0;
var second = 0;
function* g() {
  first += 1;
  yield;
  second += 1;
}
var callCount = 0;
var f;
f = function* ([[] = g()] = []) {
  callCount = callCount + 1;
};
f().next();