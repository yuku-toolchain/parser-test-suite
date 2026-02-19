var callCount = 0;
async function ref(a) {
  callCount = callCount + 1;
}
ref(42, 39).then(() => {}).then($DONE, $DONE);