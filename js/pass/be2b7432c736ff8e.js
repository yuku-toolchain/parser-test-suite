async function* gen() {
  for await (var {} of [undefined]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);