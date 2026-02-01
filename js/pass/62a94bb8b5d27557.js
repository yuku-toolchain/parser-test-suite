var callCount = 0;
async function* ref() {
  callCount = callCount + 1;
}
ref(42, 'TC39').next().then(() => {}).then($DONE, $DONE);