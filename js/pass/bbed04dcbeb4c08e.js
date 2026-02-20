var iter = Iterator.concat();
var customIter = {
  next() {
    return {
      done: true,
      value: undefined
    };
  }
};
iter = Iterator.concat({
  [Symbol.iterator]() {
    return customIter;
  }
});