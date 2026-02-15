function* g() {
  try {
    yield 1;
  } catch (err) {
    throw err;
  }
}
var iter = g();
var result;
result = iter.next();
result = iter.next();