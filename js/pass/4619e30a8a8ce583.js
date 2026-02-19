async function fn() {
  for await (var {x: y = unresolvableReference} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);