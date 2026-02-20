function* g() {
  actual = yield;
}
var iter = g();
var actual, result;
result = iter.next();
result = iter.next();