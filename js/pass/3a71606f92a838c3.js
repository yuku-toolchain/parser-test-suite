let nextCount = 0;
let returnCount = 0;
let iterable = {};
let thrower = function () {};
let iterator = {
  next() {
    nextCount += 1;
  },
  return() {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function () {
  return iterator;
};
let x;
let iterCount = 0;
async function* fn() {
  for await ([x] of [iterable]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);