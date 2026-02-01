async function* gen() {
  for await (let {} of [undefined]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);