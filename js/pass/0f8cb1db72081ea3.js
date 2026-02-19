function* g() {
  yield* [1, 2, 3];
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();