function E() {}
function* G() {
  yield 1;
  yield 2;
}
var iter;
iter = G();
var result = iter.next();