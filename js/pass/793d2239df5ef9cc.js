async function fn() {
  for await (let {w: {x, y, z} = undefined} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);