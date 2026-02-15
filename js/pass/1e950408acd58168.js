async function fn() {
  for await (let {x: y = unresolvableReference} of [{}]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);