var callCount = 0;
var f;
f = async function* ({a, b, ...rest} = {
  x: 1,
  y: 2,
  a: 5,
  b: 3
}) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);