var callCount = 0;
async function* f({x: y = 33}) {
  callCount = callCount + 1;
}
f({}).next().then(() => {}).then($DONE, $DONE);