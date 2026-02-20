async function* gen() {
  for await (const {x: y = unresolvableReference} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);