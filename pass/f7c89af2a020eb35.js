let testIterator = {
  next() {},
  return() {}
};
let iterable = {
  [Symbol.iterator]() {
    return testIterator;
  }
};
let iterator = Iterator.concat(iterable);
iterator.return();
iterator.next();
iterator.return();