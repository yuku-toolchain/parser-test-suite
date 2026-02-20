let testIterator = {
  next() {
    return {
      done: true,
      value: undefined
    };
  },
  return() {}
};
let iterable = {
  [Symbol.iterator]() {
    return testIterator;
  }
};
let iterator = Iterator.concat(iterable);
iterator.next();
iterator.return();