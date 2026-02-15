function thrower() {}
async function fn() {
  for await (var {[thrower()]: x} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);