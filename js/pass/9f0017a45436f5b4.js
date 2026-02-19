function thrower() {}
async function fn() {
  for await (let {x: y = thrower()} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);