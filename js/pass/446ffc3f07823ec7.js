function* g() {
  return yield 1;
}
var iter = g();
var result;
result = iter.next();
result = iter.next(3);