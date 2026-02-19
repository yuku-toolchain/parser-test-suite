async function* gen() {
  for await (let [[x]] of [[null]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);