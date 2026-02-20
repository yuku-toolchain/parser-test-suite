var values = [1, 2, 3];
var callCount = 0;
async function* f([...x]) {
  callCount = callCount + 1;
}
f(values).next().then(() => {}).then($DONE, $DONE);