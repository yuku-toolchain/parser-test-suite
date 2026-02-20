var enterCount = 0;
class TestIterator extends Iterator {
  next() {
    enterCount++;
    iter.next();
    return {
      done: false
    };
  }
}
var iter = new TestIterator().take(100);