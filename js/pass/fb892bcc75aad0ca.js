var callCount = 0;
async function* f({x: y}) {
  callCount = callCount + 1;
}
f({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);