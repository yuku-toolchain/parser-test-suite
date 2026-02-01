function thrower() {}
async function* gen() {
  for await (let {[thrower()]: x} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);