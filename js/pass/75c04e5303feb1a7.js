let unreachable = 0;
let nextCount = 0;
let returnCount = 0;
let iterator = {
  next() {
    nextCount += 1;
    return {
      done: false,
      value: undefined
    };
  },
  return() {
    returnCount += 1;
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
  for await ([{} = yield] of [iterable]) {
    unreachable += 1;
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);
}, $DONE).catch($DONE);