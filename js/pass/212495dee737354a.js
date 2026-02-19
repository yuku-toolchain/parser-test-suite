var callCount = 0;
async function* f([x]) {
  callCount = callCount + 1;
}
f([]).next().then(() => {}).then($DONE, $DONE);