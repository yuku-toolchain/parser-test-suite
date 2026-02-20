var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
async function* f([w = counter(), x = counter(), y = counter(), z = counter()] = [null, 0, false, '']) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);