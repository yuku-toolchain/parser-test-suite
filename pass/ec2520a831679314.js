var callCount = 0;
var f;
f = async function* h({w: {x, y, z} = {
  x: 4,
  y: 5,
  z: 6
}}) {
  callCount = callCount + 1;
};
f({
  w: undefined
}).next().then(() => {}).then($DONE, $DONE);