class ReturnCalledError extends Error {}
class ValueGetterError extends Error {}
let throwingIterator = {
  next() {
    return {
      get value() {
        throw new ValueGetterError();
      },
      done: true
    };
  },
  return() {
    throw new ReturnCalledError();
  }
};
let iterable = {
  [Symbol.iterator]() {
    return throwingIterator;
  }
};
let iterator = Iterator.concat(iterable);
let iterResult = iterator.next();