let _;
let iterCount = 0;
async function* fn() {
  for await ([[_]] of [[null]]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);