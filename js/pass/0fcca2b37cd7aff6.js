function thrower() {}
async function fn() {
  for await (let {[thrower()]: x} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);