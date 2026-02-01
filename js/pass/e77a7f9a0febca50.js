var f = function* (a) {
  yield a + 1;
  return;
};
var g = f(3);