function thrower() {}
async function fn() {
  for await (const {x = thrower()} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);