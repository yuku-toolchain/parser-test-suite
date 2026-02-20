async function fn() {
  for await (let {} of [undefined]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);