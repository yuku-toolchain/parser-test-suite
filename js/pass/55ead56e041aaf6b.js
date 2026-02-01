function* g() {
  var x = 1;
  yield x;
  with ({
    x: 2
  }) {
    yield x;
  }
  yield x;
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();