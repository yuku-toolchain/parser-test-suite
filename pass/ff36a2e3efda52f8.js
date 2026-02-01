var callCount = 0;
async function* f([...{length}] = [1, 2, 3]) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);