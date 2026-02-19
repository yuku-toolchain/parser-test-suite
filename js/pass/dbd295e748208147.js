var callCount = 0;
async function ref(a, b) {
  callCount = callCount + 1;
}
ref(42, 39, 1).then(() => {}).then($DONE, $DONE);