var callCount = 0;
var f;
f = async function* h([...x] = [1]) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);