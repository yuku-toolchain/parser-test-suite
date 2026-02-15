var callCount = 0;
var f;
f = async function* ([{x, y, z} = {
  x: 44,
  y: 55,
  z: 66
}]) {
  callCount = callCount + 1;
};
f([{
  x: 11,
  y: 22,
  z: 33
}]).next().then(() => {}).then($DONE, $DONE);