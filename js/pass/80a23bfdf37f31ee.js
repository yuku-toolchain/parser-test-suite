class ThrowingIterator extends Iterator {
  next() {}
}
let iterator = new ThrowingIterator().flatMap(x => [x]);