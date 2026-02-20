let callCount = 0;
let nextCount = 0;
let returnCount = 0;
let iter = {
  [Symbol.iterator]() {
    callCount++;
    return {
      next() {
        callCount++;
        nextCount++;
        return {
          done: true
        };
      },
      return() {
        callCount++;
        returnCount++;
        return {};
      }
    };
  }
};
function P(executor) {
  callCount++;
  return new Promise((_, reject) => {
    callCount++;
    executor(() => {
      callCount++;
    }, () => {
      callCount++;
      reject(new Test262Error('reject throws'));
    });
  });
}
P.resolve = Promise.resolve;
Promise.any.call(P, iter).then(() => {}, reason => {}).then($DONE, $DONE);