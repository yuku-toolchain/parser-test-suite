function thrower() {}
async function fn() {
  for await (var {x = thrower()} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);