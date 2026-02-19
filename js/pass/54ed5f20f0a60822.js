var callCount = 0;
var f;
f = async function* h([x = 23] = [undefined]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);