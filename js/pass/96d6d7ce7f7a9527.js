var callCount = 0;
var f;
f = async function* ([x, y, z]) {
  callCount = callCount + 1;
};
f([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);