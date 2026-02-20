async function fn() {
  for await (let {x = unresolvableReference} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);