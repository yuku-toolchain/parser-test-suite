let oldIterResult = {
  done: false,
  value: 123
};
let testIterator = {
  next() {
    return oldIterResult;
  }
};
let iterable = {
  [Symbol.iterator]() {
    return testIterator;
  }
};
let iterator = Iterator.concat(iterable);
let iterResult = iterator.next();