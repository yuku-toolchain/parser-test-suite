async function* gen() {
  for await (const [{x}] of [[null]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);