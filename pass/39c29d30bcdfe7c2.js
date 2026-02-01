class ThrowingIterator extends Iterator {
  next() {}
}
let iterator = new ThrowingIterator().map(() => 0);