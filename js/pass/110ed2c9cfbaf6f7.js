let x = {};
let iterCount = 0;
async function* fn() {
  for await ({x: x[yield]} of [{
    x: 23
  }]) {
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(result => {
  iter.next('prop').then(result => {}).then($DONE, $DONE);
});