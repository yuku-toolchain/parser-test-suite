async function fn() {
  for await (let [{x}] of [[null]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);