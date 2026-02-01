let enterCount = 0;
let testIterator = {
  next() {
    enterCount++;
    iterator.next();
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