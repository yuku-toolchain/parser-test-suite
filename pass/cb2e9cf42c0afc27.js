var initCount = 0;
function thrower() {}
async function* gen() {
  for await (let {a, b = thrower(), c = ++initCount} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);