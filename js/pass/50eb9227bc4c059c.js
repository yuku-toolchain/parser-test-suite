async function fn() {
  for await (var {w: [x, y, z] = [4, 5, 6]} of [{
    w: null
  }]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);