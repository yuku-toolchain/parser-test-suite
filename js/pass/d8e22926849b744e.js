var callCount = 0;
var f;
f = async function* h([{x, y, z} = {
  x: 44,
  y: 55,
  z: 66
}] = []) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);