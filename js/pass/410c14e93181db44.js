function thrower() {}
async function* gen() {
  for await (const {x = thrower()} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);