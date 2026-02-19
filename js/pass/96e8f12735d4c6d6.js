function* g() {
  actual = yield;
}
var expected = {};
var iter = g();
var actual, result;
result = iter.next();
result = iter.next(expected);