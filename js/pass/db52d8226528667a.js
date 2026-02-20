function* g(a, b, c, d) {
  yield a;
  yield b;
  yield c;
  yield d;
}
var iter = g(23, 45, 33);
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();