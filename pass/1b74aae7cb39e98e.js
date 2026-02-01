class IteratorThrows extends Iterator {
  next() {
    return {
      done: false,
      value: 0
    };
  }
  get return() {}
}
let iterator = new IteratorThrows([1, 2]);