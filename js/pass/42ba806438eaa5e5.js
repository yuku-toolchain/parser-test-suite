async function* gen() {
  for await (let [x = (function () {})()] of [[undefined]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);