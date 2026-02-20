var before, during, after;
try {
  throw 'exception';
} catch (err) {
  before = err;
  for (var err = 'loop initializer'; err !== 'increment'; err = 'increment') {
    during = err;
  }
  after = err;
}