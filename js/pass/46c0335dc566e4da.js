let throwingIterator = {
  next() {}
};
let iterable = {
  [Symbol.iterator]() {
    return throwingIterator;
  }
};
let iterator = Iterator.concat(iterable);