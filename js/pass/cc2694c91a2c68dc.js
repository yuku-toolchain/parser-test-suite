async function* gen() {
  for await (var [{x}] of [[]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);