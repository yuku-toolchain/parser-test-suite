var callCount = 0;
async function* f({fn = function () {}, xFn = function x() {}}) {
  callCount = callCount + 1;
}
f({}).next().then(() => {}).then($DONE, $DONE);