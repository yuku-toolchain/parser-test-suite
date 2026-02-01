let error = new Test262Error();
let nextCount = 0;
let returnCount = 0;
let iter = {
  [Symbol.iterator]() {
    return {
      next() {
        nextCount += 1;
        return {
          value: null,
          done: false
        };
      },
      return() {
        returnCount += 1;
      }
    };
  }
};
Promise.resolve = function () {
  throw error;
};
Promise.any(iter).then(() => {}, reason => {}).then($DONE, $DONE);