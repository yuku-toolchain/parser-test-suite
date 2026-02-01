let x;
let iterCount = 0;
async function* fn() {
  for await ({x: [x = yield]} of [{
    x: []
  }]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  iter.next(24601).then(result => {}).then($DONE, $DONE);
});