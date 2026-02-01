var callCount = 0;
var f;
f = async function* h([...{length}] = [1, 2, 3]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);