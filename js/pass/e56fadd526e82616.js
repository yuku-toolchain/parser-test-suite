async function fn() {
  for await (var [x = unresolvableReference] of [[]]) {
    return;
  }
}
fn().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);