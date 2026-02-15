function thrower() {}
async function fn() {
  for await (const {[thrower()]: x} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);