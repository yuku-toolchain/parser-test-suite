let returnCalled = 0;
let testIterator = {
  next() {
    return {
      done: false
    };
  },
  return() {
    returnCalled++;
    return {
      done: true
    };
  }
};
let iterable = {
  [Symbol.iterator]() {
    return testIterator;
  }
};
let iterator;
iterator = Iterator.concat(iterable);
iterator.next();
iterator.return();
iterator = Iterator.concat(iterable);
iterator.next();
iterator.return(1);
iterator = Iterator.concat(iterable);
iterator.next();
iterator.return(1, 2);