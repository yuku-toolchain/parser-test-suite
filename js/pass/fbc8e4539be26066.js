var callCount = 0;
async function* f({x: y} = {
  x: 23
}) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);