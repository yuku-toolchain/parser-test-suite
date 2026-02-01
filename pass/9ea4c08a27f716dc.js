async function fn() {
  for await (var [[x]] of [[null]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);