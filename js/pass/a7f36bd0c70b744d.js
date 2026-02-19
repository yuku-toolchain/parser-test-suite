var a = [function* (a) {
  yield a + 1;
  return;
}];
var f = a[0];
var g = f(3);