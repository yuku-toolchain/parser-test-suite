async function fn() {
  for await (const {} of [undefined]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);