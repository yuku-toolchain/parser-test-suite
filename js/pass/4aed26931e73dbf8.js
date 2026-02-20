async function fn() {
  for await (var {w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }} of [{
    w: null
  }]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);