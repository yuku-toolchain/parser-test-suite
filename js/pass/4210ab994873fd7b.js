var callCount = 0;
async function* f([...{length}]) {
  callCount = callCount + 1;
}
f([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);