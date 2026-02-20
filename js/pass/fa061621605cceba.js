let value = [[22]];
let x = {};
let iterCount = 0;
async function* fn() {
  for await ([[x[yield]]] of [value]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  iter.next('prop').then(result => {}).then($DONE, $DONE);
}, $DONE).catch($DONE);