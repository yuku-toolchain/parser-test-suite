async function fn() {
  for await (let [{x}] of [[]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);