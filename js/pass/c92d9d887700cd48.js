var callCount = 0;
async function* f([...x]) {
  callCount = callCount + 1;
}
f([1]).next().then(() => {}).then($DONE, $DONE);