var callCount = 0;
async function* f([x = 23]) {
  callCount = callCount + 1;
}
f([]).next().then(() => {}).then($DONE, $DONE);