var callCount = 0;
var f;
f = async function* h([_, x] = []) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);