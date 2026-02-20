function* g() {
  yield yield 1;
}
var iter = g();
var result;
result = iter.next();
result = iter.next(3);
result = iter.next();