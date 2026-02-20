function* g() {
  yield arguments[0];
  yield arguments[1];
  yield arguments[2];
  yield arguments[3];
}
var iter = g(23, 45, 33);
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();