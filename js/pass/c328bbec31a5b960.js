var callCount = 0;
var f;
f = async function* h([...x] = [1, 2]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);