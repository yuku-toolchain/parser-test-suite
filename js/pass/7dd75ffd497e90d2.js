var callCount = 0;
async function* f([...x] = [1, 2]) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);