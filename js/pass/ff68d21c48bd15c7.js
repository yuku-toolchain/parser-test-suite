let x = {
  set y(val) {}
};
let iterCount = 0;
async function* fn() {
  for await ([x.y] of [[23]]) {
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({constructor}) => {}).then($DONE, $DONE);