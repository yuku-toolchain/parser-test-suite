async function fn() {
  for await (const [x = unresolvableReference] of [[]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);