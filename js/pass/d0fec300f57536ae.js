var returnCalls = 0;
var inner = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      done: false
    };
  },
  throw: IsHTMLDDA,
  return() {
    returnCalls += 1;
    return {
      done: true
    };
  }
};
var outer = (function* () {
  yield* inner;
})();
outer.next();