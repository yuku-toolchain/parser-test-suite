let nextCalled = 0;
let testIterator = {
  next() {
    nextCalled++;
    return {
      done: false,
      value: 0
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
iterator.next(1);
iterator.next(1, 2);