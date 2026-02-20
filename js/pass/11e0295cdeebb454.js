let value = [33];
let x = {};
let iterationResult;
let iterCount = 0;
async function* fn() {
  for await ([x[yield]] of [[33]]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(iterationResult => {
  iter.next('prop').then(iterationResult => {}).then($DONE, $DONE);
});