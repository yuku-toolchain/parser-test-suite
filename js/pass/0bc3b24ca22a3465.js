const throwingIterator = {
  [Symbol.iterator]: function () {
    return this;
  },
  next: function next() {}
};