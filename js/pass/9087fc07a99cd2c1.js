async function* gen() {
  for await (const [x = (function () {})()] of [[undefined]]) {
    return;
  }
}
gen().next().then(_ => {}, ({constructor}) => {}).then($DONE, $DONE);