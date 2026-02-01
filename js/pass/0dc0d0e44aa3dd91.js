var callCount = 0;
async function* f({a, b, ...rest}) {
  callCount = callCount + 1;
}
f({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next().then(() => {}).then($DONE, $DONE);