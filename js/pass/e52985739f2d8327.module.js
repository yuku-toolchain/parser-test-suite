let iterCount = 0;
async function fn() {
  for await ([unresolvable] of [[]]) {
    iterCount += 1;
  }
}
let promise = fn();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);