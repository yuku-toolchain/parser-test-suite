async function fn() {
  for await (var {} of [null]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);