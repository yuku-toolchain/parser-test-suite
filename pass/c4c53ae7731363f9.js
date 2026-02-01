var callCount = 0;
var f;
f = async function* h([...[x, y, z]] = [3, 4, 5]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);