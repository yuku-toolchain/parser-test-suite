let enterCount = 0;
let testIterator = {
  next() {
    return {
      done: false
    };
  },
  return() {
    enterCount++;
    iterator.return();
    return {
      done: false
    };
  }
};
let iterable = {
  [Symbol.iterator]() {
    return testIterator;
  }
};
let iterator = Iterator.concat(iterable);
iterator.next();