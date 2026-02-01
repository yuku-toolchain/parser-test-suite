class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}
let iterator = new NonObjectIterator().drop(0);
iterator = new NonObjectIterator().drop(2);