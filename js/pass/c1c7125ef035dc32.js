var returnCallCount = 0;
var underlying = {
  next() {
    return {
      value: 123,
      done: false
    };
  },
  return() {
    returnCallCount += 1;
    return {};
  }
};
var it = Iterator.zip([underlying]);
var result = it.next();
var result = it.return();