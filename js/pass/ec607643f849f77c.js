class ThrowingIterator extends Iterator {
  next() {}
}
let iterator = new ThrowingIterator().filter(() => true);