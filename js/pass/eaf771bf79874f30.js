function thrower() {}
async function* gen() {
  for await (const {[thrower()]: x} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);