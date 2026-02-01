let _;
let iterCount = 0;
async function* fn() {
  for await ([[x]] of [[undefined]]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);