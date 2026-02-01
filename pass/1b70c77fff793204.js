var callCount = 0;
var f;
f = async function* ([x, y, z] = [1, 2, 3]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);