let throwingIterator = {
  next() {
    return {
      get done() {},
      value: 1
    };
  },
  return() {
    throw new Error();
  }
};
let iterable = {
  [Symbol.iterator]() {
    return throwingIterator;
  }
};
let iterator = Iterator.concat(iterable);