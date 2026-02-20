let closed = false;
const iterator = {
  next() {
    return {
      value: 1,
      done: false
    };
  },
  return() {
    closed = true;
    return {
      done: true
    };
  },
  [Symbol.iterator]() {
    return this;
  }
};