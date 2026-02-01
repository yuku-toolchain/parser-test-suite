async function fn() {
  for await (const [{x}] of [[]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);