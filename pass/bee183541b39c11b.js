var values = [2, 1, 3];
var callCount = 0;
async function* f([[...x] = values] = []) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);