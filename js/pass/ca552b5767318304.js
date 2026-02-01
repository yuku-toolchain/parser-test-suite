var callCount = 0;
var f;
f = async function* ({x} = {
  x: 23
}) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);