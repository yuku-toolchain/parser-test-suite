class ThrowingIterator extends Iterator {
  get next() {}
}
let iterator = new ThrowingIterator();