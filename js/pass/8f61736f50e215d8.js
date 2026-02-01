async function* gen() {
  for await (var {x: y = unresolvableReference} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);