var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
async function* f([[] = g()]) {
  callCount = callCount + 1;
}
f([[]]).next().then(() => {}).then($DONE, $DONE);