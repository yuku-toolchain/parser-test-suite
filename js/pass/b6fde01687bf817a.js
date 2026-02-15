let x;
let iterCount = 0;
async function* fn() {
  for await ([...{x = yield}] of [[{}]]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(iterationResult => {
  iter.next(4).then(iterationResult => {}).then($DONE, $DONE);
});