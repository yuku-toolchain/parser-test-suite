let returnCount = 0;
let testIterator = {
  next() {
    return {
      done: false,
      value: 1
    };
  },
  return() {
    ++returnCount;
    return {};
  }
};
let iterable = {
  [Symbol.iterator]() {
    return testIterator;
  }
};
let iterator = Iterator.concat(iterable);
let iterResult = iterator.next();
iterator.return();
iterator.return();