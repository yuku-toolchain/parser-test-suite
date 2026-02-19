var callCount = 0;
async function* f([x, y, z] = [1, 2, 3]) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);