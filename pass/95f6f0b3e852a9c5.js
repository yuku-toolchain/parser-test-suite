var callCount = 0;
async function* f([...[x, y, z]] = [3, 4, 5]) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);