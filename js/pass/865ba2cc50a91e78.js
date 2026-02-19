async function* gen() {
  for await (const [{x}] of [[]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);