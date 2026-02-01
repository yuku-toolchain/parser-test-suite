let x;
let nextCount = 0;
let iterator = {
  next() {
    nextCount += 1;
    return {
      done: nextCount > 10
    };
  },
  return() {
    return null;
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
let promise = fn().next();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);