var callCount = 0;
async function* f({w: {x, y, z} = {
  x: 4,
  y: 5,
  z: 6
}} = {
  w: undefined
}) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);