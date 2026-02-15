var callCount = 0;
var f;
f = async function* h([...[x, y, z]]) {
  callCount = callCount + 1;
};
f([3, 4, 5]).next().then(() => {}).then($DONE, $DONE);