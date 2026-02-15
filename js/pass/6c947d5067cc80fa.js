async function fn() {
  for await (let {w: [x, y, z] = [4, 5, 6]} of [{
    w: null
  }]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);