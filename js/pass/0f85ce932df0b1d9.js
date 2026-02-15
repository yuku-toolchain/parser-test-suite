function thrower() {}
async function* gen() {
  for await (const {x: y = thrower()} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);