var callCount = 0;
async function* f({w: [x, y, z] = [4, 5, 6]} = {
  w: [7, undefined]
}) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);