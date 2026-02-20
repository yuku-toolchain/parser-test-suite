let callCount = 0;
let thrown = new Test262Error();
function P(executor) {
  callCount++;
  return new Promise((_, reject) => {
    callCount++;
    executor(() => {
      callCount++;
      throw thrown;
    }, (...args) => {
      callCount++;
      reject(...args);
    });
  });
}
P.resolve = Promise.resolve;
Promise.any.call(P, [1]).then(() => {}, error => {}).then($DONE, $DONE);