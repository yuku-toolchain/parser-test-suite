let closed = false;
const iterator = {
  next() {
    return Promise.resolve({
      value: 1,
      done: false
    });
  },
  return() {
    closed = true;
    return Promise.resolve({
      done: true
    });
  },
  [Symbol.asyncIterator]() {
    return this;
  }
};