async function fn() {
  for await (var {w: {x, y, z} = undefined} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);