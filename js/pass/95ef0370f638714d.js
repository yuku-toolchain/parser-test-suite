let callCount = 0;
let nextCount = 0;
let returnCount = 0;
let iter = {
  [Symbol.iterator]() {
    callCount++;
    return {
      next() {
        callCount++;
        nextCount += 1;
        return {
          done: true
        };
      },
      return() {
        callCount++;
        returnCount += 1;
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
    }, (...args) => {
      callCount++;
      reject(...args);
    });
  });
}
P.resolve = Promise.resolve;
Promise.any.call(P, iter).then(() => {}, reason => {}).then($DONE, $DONE);