async function fn() {
  for await (const {x: y = unresolvableReference} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);