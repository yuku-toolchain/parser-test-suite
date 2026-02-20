let nextCount = 0;
let returnCount = 0;
let x;
let iterator = {
  next() {
    nextCount += 1;
    return {
      done: nextCount > 10
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
iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);