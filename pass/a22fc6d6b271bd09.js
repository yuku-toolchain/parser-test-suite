let iterable = {
  [Symbol.iterator]() {}
};
let _;
let iterCount = 0;
async function* fn() {
  for await ([_] of [iterable]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);