let x = {};
let iterCount = 0;
async function* fn() {
  for await ([...[x[yield]]] of [[86]]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(iterationResult => {
  iter.next('prop').then(iterationResult => {}).then($DONE, $DONE);
});