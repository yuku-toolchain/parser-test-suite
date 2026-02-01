var callCount = 0;
async function* f([_, x] = []) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);