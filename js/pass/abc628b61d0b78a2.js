class IteratorThrows extends Iterator {
  next() {
    return {
      done: false,
      value: 0
    };
  }
  return() {}
}
let iterator = new IteratorThrows().flatMap(() => []);