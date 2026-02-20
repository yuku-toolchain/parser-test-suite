let x;
let iterCount = 0;
async function* fn() {
  for await ({x: x = yield} of [{}]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  iter.next(86).then(result => {}).then($DONE, $DONE);
});