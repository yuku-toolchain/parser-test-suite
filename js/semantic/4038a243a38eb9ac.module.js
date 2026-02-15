let eval;
let iterCount = 0;
async function fn() {
  for await ({eval} of [{
    eval: 1
  }]) {
    iterCount += 1;
  }
}
let promise = fn();
promise.then(() => {}, $DONE).then($DONE, $DONE);