async function* gen() {
  for await (let [{x}] of [[]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);