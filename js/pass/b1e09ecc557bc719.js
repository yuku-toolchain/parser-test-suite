var values = [1, 2, 3, 4, 5];
var callCount = 0;
var f;
f = async function* h([...x] = values) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);