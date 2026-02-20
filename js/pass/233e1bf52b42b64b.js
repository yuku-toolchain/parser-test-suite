var iterationCount = 0;
var returnGets = 0;
var syncIterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      value: 1,
      done: false
    };
  },
  get return() {
    returnGets += 1;
    return null;
  }
};