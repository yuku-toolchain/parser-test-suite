let nextCount = 0;
let returnCount = 0;
let thrower = function () {};
let x;
let iterator = {
  next() {
    nextCount += 1;
    return {
      done: true
    };
  },
  return() {
    returnCount += 1;
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
let iterCount = 0;
async function* fn() {
  for await ([x] of [iterable]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE).then($DONE, $DONE);