class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}
let iterator = new NonObjectIterator().take(0);
iterator.next();
iterator = new NonObjectIterator().take(1);