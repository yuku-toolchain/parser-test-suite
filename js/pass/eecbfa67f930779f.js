class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}
let iterator = new NonObjectIterator().flatMap(x => [x]);