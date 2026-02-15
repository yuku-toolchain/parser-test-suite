var callCount = 0;
async function* f([x = 23] = [undefined]) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);