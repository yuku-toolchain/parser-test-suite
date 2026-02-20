var callCount = 0;
async function* f([[x, y, z] = [4, 5, 6]]) {
  callCount = callCount + 1;
}
f([[7, 8, 9]]).next().then(() => {}).then($DONE, $DONE);