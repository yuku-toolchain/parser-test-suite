var before, during, after;
try {
  throw 'exception';
} catch (err) {
  before = err;
  for (var err of [2]) {
    during = err;
  }
  after = err;
}