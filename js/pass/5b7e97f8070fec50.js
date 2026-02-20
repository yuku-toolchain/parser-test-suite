function* g() {
  for (var idx = 0; idx < 3; idx++) {
    yield idx;
  }
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();