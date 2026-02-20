function thrower() {}
async function* gen() {
  for await (var {[thrower()]: x} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);