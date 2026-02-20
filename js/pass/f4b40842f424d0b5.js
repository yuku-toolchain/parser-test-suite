class ThrowingIterator extends Iterator {
  next() {}
}
let iterator = new ThrowingIterator().take(0);
iterator.next();
iterator = new ThrowingIterator().take(1);