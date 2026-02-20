class ThrowingIterator extends Iterator {
  next() {}
}
let iterator = new ThrowingIterator().drop(0);
iterator = new ThrowingIterator().drop(1);