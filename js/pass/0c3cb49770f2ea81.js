async function* gen() {
  for await (var {x = unresolvableReference} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);