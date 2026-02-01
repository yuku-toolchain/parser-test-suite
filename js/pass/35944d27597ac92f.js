async function fn() {
  for await (const [[x]] of [[null]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);