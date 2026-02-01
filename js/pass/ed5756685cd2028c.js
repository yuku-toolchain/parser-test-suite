function* g(a, b, c, d) {
  arguments[0] = 32;
  arguments[1] = 54;
  arguments[2] = 333;
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