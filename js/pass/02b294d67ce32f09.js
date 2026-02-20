function* g() {
  yield 1;
  return 2;
}
var iter = g();
var result;
result = iter.next();
result = iter.next();