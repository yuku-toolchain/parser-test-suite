async function fn() {
  for await (var [{x}] of [[]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);