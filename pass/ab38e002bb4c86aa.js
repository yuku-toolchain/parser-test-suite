var callCount = 0;
var f;
f = async function* ({x: [y]} = {
  x: [45]
}) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);