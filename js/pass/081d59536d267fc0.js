function thrower() {}
async function* gen() {
  for await (let {x = thrower()} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);