function thrower() {}
async function* gen() {
  for await (var {x: y = thrower()} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);