async function* gen() {
  for await (const {x = unresolvableReference} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);