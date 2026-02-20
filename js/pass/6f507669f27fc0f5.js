var before, during, after;
try {
  throw 'exception';
} catch (err) {
  before = err;
  for (var err in {
    propertyName: null
  }) {
    during = err;
  }
  after = err;
}