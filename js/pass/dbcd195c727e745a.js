async function* gen() {
  for await (const {} of [undefined]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);