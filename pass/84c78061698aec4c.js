function* g() {
  yield* 'abc';
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();