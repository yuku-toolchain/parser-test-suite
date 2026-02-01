function* g() {
  try {
    throw new Error();
  } catch (err) {
    yield 1;
  }
}
var iter = g();
var result;
result = iter.next();
result = iter.next();