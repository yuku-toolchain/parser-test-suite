var arr = [2, 3];
var callCount = 0;
async function* ref() {
  callCount = callCount + 1;
}
ref(42, ...[1], ...arr).next().then(() => {}).then($DONE, $DONE);