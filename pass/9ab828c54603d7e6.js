function* foo(a) {
  yield a + 1;
  return;
}
var g = foo(3);