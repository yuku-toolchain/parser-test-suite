var values = [1, 2, 3];
var callCount = 0;
async function* f([...x] = values) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);