var callCount = 0;
async function* ref(a, b) {
  callCount = callCount + 1;
}
ref(42, 39, 1).next().then(() => {}).then($DONE, $DONE);