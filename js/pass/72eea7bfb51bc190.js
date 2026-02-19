async function* gen() {
  for await (var [[x]] of [[null]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);