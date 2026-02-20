let x;
let iterCount = 0;
async function* fn() {
  for await ({x = yield} of [{}]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  iter.next(3).then(result => {}).then($DONE, $DONE);
});