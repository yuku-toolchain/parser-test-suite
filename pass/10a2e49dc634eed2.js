async function fn() {
  for await (var {} of [undefined]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);