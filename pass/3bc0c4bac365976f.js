let throwingIterator = {
  next() {
    return {
      get value() {},
      done: false
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