function* g() {
  yield 1;
  yield 2;
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();