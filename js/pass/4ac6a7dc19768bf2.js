{
  let iterCount = 0;
  async function fn() {
    for await ({x: unresolvable} of [{}]) {
      iterCount += 1;
    }
  }
  let promise = fn();
  promise.then(() => {}, $DONE).then($DONE, $DONE);
}