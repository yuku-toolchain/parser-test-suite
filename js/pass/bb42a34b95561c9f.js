var nextArgumentsLength;
var syncIterator = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    nextArgumentsLength = arguments.length;
    return {
      done: true
    };
  }
};