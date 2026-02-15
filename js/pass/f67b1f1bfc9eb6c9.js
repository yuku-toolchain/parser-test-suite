var callCount = 0;
async function ref(a, b = 39) {
  callCount = callCount + 1;
}
ref(42, undefined, 1).then(() => {}).then($DONE, $DONE);