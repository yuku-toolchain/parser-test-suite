var callCount = 0;
async function* f([...[x, y, z]]) {
  callCount = callCount + 1;
}
f([3, 4, 5]).next().then(() => {}).then($DONE, $DONE);