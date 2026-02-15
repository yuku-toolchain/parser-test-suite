let nonObjectIterator = {
  next() {
    return null;
  }
};
let iterable = {
  [Symbol.iterator]() {
    return nonObjectIterator;
  }
};
let iterator = Iterator.concat(iterable);