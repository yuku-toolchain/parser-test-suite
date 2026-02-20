var callCount = 0;
async function* f([[x, y, z] = [4, 5, 6]] = []) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);