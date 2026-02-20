async function* gen() {
  for await (let {x = unresolvableReference} of [{}]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);