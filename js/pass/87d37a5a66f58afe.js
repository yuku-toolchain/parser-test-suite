let nextCount = 0;
let returnCount = 0;
let _;
let iterator = {
  next() {
    nextCount += 1;
    return {
      done: true
    };
  },
  return() {
    returnCount += 1;
    return {};
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
let iterCount = 0;
async function* fn() {
  for await ([_] of [iterable]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => {}).then($DONE, $DONE);