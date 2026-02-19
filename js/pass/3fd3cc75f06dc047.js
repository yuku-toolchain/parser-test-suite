var returnArgumentsLength;
var syncIterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      done: false
    };
  },
  return() {
    returnArgumentsLength = arguments.length;
    return {
      done: true
    };
  }
};